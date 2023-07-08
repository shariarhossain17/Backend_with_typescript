import User from "./user.model";

export const createUserToDb = async () => {
  const user = new User({
    name: {
      firstName: "shariar",
      middleName: "hossain",
      lastName: "something",
    },
    email: "shariar@gmail.com",
    phone: 12121,
    gender: "male",
    password: "habijani",
    role: "student",
  });

  await user.save();
};
