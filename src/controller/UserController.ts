import { Request, Response } from "express";
import { create } from "../service/user/create-user";
import { getUserByEmail } from "../service/user/login-user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserController {
  static async index(req: Request, res: Response) {
    res.json({
      Hello: "Alo do back-end, ta tudo bem? :) ",
    });
  }

  static async createUser(req: Request, res: Response) {
    try {
      const senha = req.body.senha;

      const hash_senha = await bcrypt.hash(senha, 10);

      const email = req.body.email;

      const emailExists = await getUserByEmail(email);

      if (emailExists) {
        res.status(409).json({
          Message: "Email já existe",
        });
        return;
      }

      await create(req.body.nome, req.body.email, hash_senha);

      res.status(201).json({
        Message: "Usuario criado com sucesso",
      });
    } catch (error) {
      res.status(400).json({
        Erro: "Não funcionou a criação",
      });
    }
  }

  static async loginUser(req: Request, res: Response) {
    try {
      const email = req.body.email;

      const user = await getUserByEmail(email);

      if (!user) {
        throw new Error("Email ou senha invalidos.");
      }

      const senha = req.body.senha;

      const verificaSenha = await bcrypt.compare(senha, user.senha);

      if (!verificaSenha) {
        throw new Error("Email ou senha invalidos.");
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: "8h",
      });

      console.log(token);

      res.status(200).json({
        Message: "Login deu certo",
        token,
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
        },
      });
    } catch (error) {
      res.status(401).json({
        Erro: "Erro. Login nao deu certo",
      });
    }
  }
}

