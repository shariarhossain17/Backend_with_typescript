import cors from "cors";
import express, { Application, Request, Response } from "express";
const colors = require("colors");

import userRoute from "../modules/user/user.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("server running");
});
export default app;
