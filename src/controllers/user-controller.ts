import {
  createSession,
  createUser,
  getUserIdByEmail,
} from "../repositories/user-repository.js";
import jwt from "jsonwebtoken";
import bcrypt, { hashSync } from "bcrypt";
import { Request, Response } from "express";
import { Login, User } from "../protocols/user.js";

async function signUp(req: Request, res: Response) {
  const { name, email, password, imageUrl } = req.body as User;

  const encryptedPass: string = bcrypt.hashSync(password, 10);

  try {
    await createUser(name, email, encryptedPass, imageUrl);
    res.status(201).send("Usuário cadastrado com sucesso!");
  } catch (error) {
    console.log(error.detail);
    return res.sendStatus(500);
  }
}

async function signIn(req: Request, res: Response) {
  const { email, password } = req.body as Login;

  try {
    const userId: number = (await getUserIdByEmail(email)).rows[0].id;
    const token: string = jwt.sign({ userId: userId }, process.env.JWT_SECRET);

    await createSession(token, userId);

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export { signUp, signIn };
