import express from "express";
import {
  createUser,
  getAdminUser,
  getUser,
  getUserById,
} from "./user.controller";

const router = express.Router();

router.get("/", getUser);
router.post("/createUser", createUser);

router.get("/admins", getAdminUser);
router.route("/:id").get(getUserById);

export default router;
