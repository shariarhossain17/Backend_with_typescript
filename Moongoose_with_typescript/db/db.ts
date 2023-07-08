const colors = require("colors");
import mongoose from "mongoose";

async function db() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice");
    console.log(colors.yellow("database connected").bold);
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
}

export default db;
