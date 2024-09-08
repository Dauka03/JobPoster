var jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
// import { User } from "./types"; // Assuming you have a User interface in a types.ts file
dotenv.config();

interface AuthenticatedRequest extends Request {
  user: any;
}

export const authenticateJWT = (
  req: AuthenticatedRequest, // Use the custom interface
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.sendStatus(403);

    if (typeof user !== "object") return res.sendStatus(401);

    req.user = user as any; // Now it's valid and correctly typed as User
    next();
  });
};
