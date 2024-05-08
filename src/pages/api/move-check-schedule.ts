import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export interface ISchedule {
  day: string;
  location: string;
  address: string;
  time: string;
}

const filePath = path.resolve(process.cwd(), "data/movecheck-schedule.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    try {
      // Fetch users from the database with query parameters
      const schedules = fs.readFileSync(filePath, "utf-8");
      const parsedSchedules: ISchedule[] = JSON.parse(schedules);

      res.status(200).json(parsedSchedules);
    } catch (error) {
      console.error("Error fetching schedules:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
