import { HydratedDocument, Model } from "mongoose";

interface IUser {
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  phone: number;
  gender: "male" | "female";
  password: string;
  role: "student" | "admin";
  presentAddress?: string;
}

// static methods

// method
export interface IUserMethods {
  fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdmin(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
export default IUser;
