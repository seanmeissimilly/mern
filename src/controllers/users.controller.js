import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

//todo: Manejo de errores.
const handleErrors = (res, error) => {
  console.error("Error:", error);
  res.status(500).json({ message: error.message });
};

//todo: Busco todas las usuarios.
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    handleErrors(res, error);
  }
};

//todo: Actualizo el usuario.
export const updateUser = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.status(400).json({ message: "The email is already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { email, password: hashedPassword, username },
      { new: true }
    );
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    handleErrors(res, error);
  }
};

//todo: Borro el usuario.
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(204).json({ message: "User successfully deleted" });
  } catch (error) {
    handleErrors(res, error);
  }
};

//todo: Busco el usuario en la base de datos.
export const profile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(404).json({ message: "User not found" });
    res.json({
      id: userFound._id,
      username: userFound.username,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
