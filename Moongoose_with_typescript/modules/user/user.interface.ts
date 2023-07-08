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

export default IUser;
