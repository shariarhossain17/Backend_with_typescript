import { NextFunction, Request, Response } from "express";
import {
  createUserToDb,
  getAdminUserService,
  getUserByIdService,
  getUserFromDb,
} from "./user.services";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.body;
  const user = await createUserToDb(userData);
  res
    .status(201)
    .json({ status: true, message: "user create success", result: user });
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUserFromDb();
  res.status(200).json({ status: true, message: "success", result: user });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = await getUserByIdService(id);

  res.status(200).json({ status: true, message: "success", result: user });
};

export const getAdminUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admins = await getAdminUserService();
  res.status(200).json({ status: true, message: "success", result: admins });
};
