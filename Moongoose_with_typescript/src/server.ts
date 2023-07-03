const express = require("express");
const app = express();
const mongoose = require("mongoose");
const color = require("color");
const port = process.env.PORT || 8800;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/practice");
  console.log("database connected");
}

main().catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`mongoose server running on ${port}`);
});
