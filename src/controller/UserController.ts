import { Request, Response } from "express";
import { create } from "../service/user/create-user";
import { getUserByEmail } from "../service/user/login-user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateCode } from "../service/user/generate-code";
import { sendEmailUser, sendUrlUser } from "../service/nodemailer";
import { descryptCode } from "../service/user/descript-email";
import { validUserService } from "../service/user/valid-user";
import { UserValidHtml } from "../service/html";

export class UserController {
  static async index(req: Request, res: Response) {
    res.json({
      Hello: "Alo do back-end, ta tudo bem? :) ",
    });
  }

  static async createUser(req: Request, res: Response) {
    try {

      

      const email = req.body.email;
      
      await create(req.body.nome, req.body.email, req.body.senha);

      const url_usuario = req.protocol + "://"+ req.host + `/valid/${generateCode(email)}`
     
      if(process.env.NODE_ENV != "test"){
        sendUrlUser(email, url_usuario);
      };

      res.status(201).json({
        Message: "Usuario criado com sucesso",
        Email: process.env.NODE_ENV != "test" ? email : url_usuario,  
      });

    } catch (error) {
      res.status(400).json({
        Erro: "Não funcionou a criação " + error,
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

  static async validUser(req: Request, res: Response) {
    const codigo = req.params.code
    
    const email = descryptCode(codigo)

    try {

      await validUserService(email)

      if(process.env.NODE_ENV == "test"){
        
        res.status(200).json({
        Message: "Usuario validado",

        })
        return
      }
      

      res.send(UserValidHtml())

    } catch (error) {
      res.status(500).json({
        Erro: "Usuário não encontrado"
      })
    }


      
  }
  

}

