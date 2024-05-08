import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

export const secretKey = "s6P&@kE2#nQzs6P&@kE2#nQzs6P&@kE2#nQz"; // This should be a long, randomly generated string, ideally stored in an environment variable
const filePath = path.resolve(process.cwd(), "data/users.json");

interface IUser {
  id: number;
  username: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      // Read users from the JSON file
      const users = fs.readFileSync(filePath, "utf-8");
      const parsedUsers: IUser[] = JSON.parse(users);

      // Find user by username
      const foundUser = parsedUsers.find((user) => user.username === username);

      if (!foundUser) {
        return res.status(401).json({ error: "User not found" });
      }

      if (foundUser.password != password) {
        return res.status(401).json({ error: "Invalid password" });
      }

      // Generate JWT token
      const token = jwt.sign({ username }, secretKey, { expiresIn: "72h" });

      res.status(201).json({ token });
    } catch (error) {
      console.error("Error authenticating user:", error);
      res.status(500).json({ error: "Unable to authenticate user" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
