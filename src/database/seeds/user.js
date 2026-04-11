import User from "../models/users.js";
import bcrypt from "bcrypt";

export const seedUsers = async () => {
    const hashPassword = await bcrypt.hash("password123",10)
    const users = [
      {
        fullName: "Kamayirese",
        email: "kamayirese@gmail.com",
        phoneNumber: "0781234566",
        location: "Nyamirambo",
        gender: "male",
        password: hashPassword,
      },
      {
        fullName: "Kamanzi",
        email: "kamanzi@gmail.com",
        phoneNumber: "0781234546",
        location: "Nyamirambo",
        gender: "male",
        password: hashPassword,
      },
      {
        fullName: "Deborah",
        email: "deborah@gmail.com",
        phoneNumber: "0781234564",
        location: "Nyamirambo",
        gender: "female",
        password: hashPassword,
      },
    ];
    await User.bulkCreate(users, {ignoreDuplicates: true});
}