import { Schema, model } from "mongoose";
import IUser, { IUserMethods, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student",
  },
  presentAddress: {
    type: String,
  },
});

userSchema.static("getAdmin", async function getAdmin() {
  return await this.find({ role: "admin" });
});

userSchema.method("fullName", function () {
  return this.name.firstName + " " + this.name.middleName;
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;
