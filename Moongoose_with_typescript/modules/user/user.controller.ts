import { NextFunction, Request, Response } from "express";
import { createUserToDb } from "./user.services";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDb();
  res.status(201).json({ status: true, message: "user create success" });
};
