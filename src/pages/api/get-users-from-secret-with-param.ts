import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { secretKey } from "./secret-login";

const prisma = new PrismaClient();

export interface IFreeSimpleResponse {
  fullname: string;
  email: string;
  address: string;
  phonenumber: string;
  product?: string;
  createDate?: string;
  id?: number;
  [key: string]: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    try {
      // Get the JWT token from the request headers
      const token = req.headers.authorization?.replace("Bearer ", "");

      if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Verify the JWT token
      jwt.verify(token, secretKey, async (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: "Unauthorized" });
        }

        // Parse query parameters from the URL
        const {
          order = "desc",
          limit = 10,
          sortBy = "createdate",
          pageNumber = 1,
        } = req.query;

        const validatedLimit =
          typeof limit === "string" ? parseInt(limit, 10) : 10;
        const validatedSortBy = sortBy as string;
        const validatedPageNumber =
          typeof pageNumber === "string" ? parseInt(pageNumber, 10) : 1;

        const skip = (validatedPageNumber - 1) * validatedLimit;

        // Fetch users from the database with query parameters
        const users = await prisma.contact.findMany({
          orderBy: {
            [validatedSortBy]: order,
          },
          take: validatedLimit,
          skip: skip,
        });

        res.status(200).json(users);
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
