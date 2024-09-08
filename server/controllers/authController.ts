import { Request, Response } from "express";
import bcrypt from "bcryptjs";
var jwt = require("jsonwebtoken");
import { User } from "../models/User";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res
      .status(201)
      .json({ message: "Пользователь зарегистрирован успешно", userId: user.id });
  } catch (error) {
    res.status(500).json({ error: "Ошибка при регистрации пользователя" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ error: "Пользователь не найден" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Ошибка при авторизации пользователя" });
  }
};
