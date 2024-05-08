import { NextApiResponse } from "next";
import multer from "multer";
import path from "path";
import { Request, Response } from "express"; // Import Request and Response types from express
import excelToJson from "convert-excel-to-json";
import fs from "fs";
// import { ISchedule } from "..";

const uploadDir = path.resolve(process.cwd(), "data");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage }).single("file");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: any, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    try {
      upload(
        req as unknown as Request,
        res as unknown as Response,
        (err: any) => {
          if (err) {
            console.error("Error uploading file:", err);
            return res.status(500).json({ error: "Error uploading file" });
          }

          const fileData = req.file;
          if (!fileData) {
            return res.status(400).json({ error: "No file uploaded" });
          }

          // Read the content of the uploaded file
          const filePath = path.resolve(
            process.cwd(),
            `data/${fileData.filename}`
          );

          // Convert Excel content to JSON
          const result = excelToJson({
            sourceFile: filePath,
          });

          const dataEntries = Object.values(result)[0].slice(1);

          const schedules: any[] = dataEntries.map((entry) => ({
            day: entry.A,
            location: entry.B,
            address: entry.C,
            time: entry.D,
          }));

          const jsonFilePath = path.join(uploadDir, "movecheck-schedule.json");

          fs.writeFile(jsonFilePath, JSON.stringify(schedules), (err) => {
            if (err) {
              console.error("Error writing JSON file:", err);
              return res.status(500).json({ error: "Error writing JSON file" });
            }
            console.log("Schedules written to movecheck-schedule.json");
            res.status(200).json({ message: "Schedules written to file" });
          });
        }
      );
    } catch (error) {
      console.error("Error processing file:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
