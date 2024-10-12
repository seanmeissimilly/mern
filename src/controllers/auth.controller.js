import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, username });

    const userSaved = await newUser.save();
    const token = await createAccessToken({
      id: userSaved._id,
      username: userSaved.username,
    });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
      // token,
    });
  } catch (error) {
    console.error(error);
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  res.send("login");
};
