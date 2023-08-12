import IUser from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = await User.create(payload);
  const fullName: string = user.fullName();
  console.log(fullName);
  return user;
};

export const getUserFromDb = async (): Promise<IUser[]> => {
  const user = await User.find({});
  return user;
};

export const getUserByIdService = async (id: string): Promise<IUser | null> => {
  const user = User.findById(id);
  return user;
};

export const getAdminUserService = async (): Promise<IUser | null> => {
  const adminUser = await User.getAdmin();
  return adminUser;
};
