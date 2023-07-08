import app from "./app/app";
import db from "./db/db";
const port: string | number = process.env.PORT || 8800;
const colors = require("colors");

db();

app.listen(port, () => {
  console.log(colors.green(`mongoose server running on ${port}`).bold);
});
