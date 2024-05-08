// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    // const { fullname, email, phonenumber, address, product } = req.body;

    try {
      //   const newContact = await prisma.contact.create({
      //     data: {
      //       fullname,
      //       email,
      //       phonenumber,
      //       address,
      //       product,
      //     },
      //   });

      res.status(201).json("");
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ error: "Unable to create contact" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
