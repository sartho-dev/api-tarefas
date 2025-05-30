import { Request, Response } from "express";
import { sendEmailUser } from "../service/nodemailer";
import jwt from "jsonwebtoken";
import { generate4code } from "../service/user/generate-code";
import { saveCode } from "../service/user/persist-code";
import { validCode4 } from "../service/user/valid-user";
import { getIdUserByEmail, getUserByEmail } from "../service/user/login/login-user";
import { updateUserPassw } from "../service/user/update/update-user-password";

type TokenPasswordPayload = {
  idToken: number;
};

export class MailerController {
  static async sendEmailController(req: Request, res: Response) {
    try {
      const emailUsuario = req.body.email;

      const codigoRamdom = generate4code();

      const id = await getIdUserByEmail(emailUsuario);

      saveCode(codigoRamdom, id);

      sendEmailUser(emailUsuario, codigoRamdom);

      res.status(200).json({
        Message: "Código enviado com sucesso",
        identy: id,
      });
    } catch (error) {
      res.status(500).json({
        Erro: "Código não enviado",
      });
    }
  }
  static async confirmCode(req: Request, res: Response) {
    try {
      const codigoDigitado = req.body.codigo;

      const id_usuario = req.body.id_usuario;

      const valido = validCode4(codigoDigitado, id_usuario);

      if (!valido) {
        res.status(401).json({
          Erro: "Erro de autenticação",
        });
        return;
      }

      const token = jwt.sign({ idToken: id_usuario }, process.env.SECRET_KEY, {
        expiresIn: "20m",
      });

      res.status(200).json({
        Message: "Usuario autenticado com sucesso!",
        token,  
        id: id_usuario,
      });
    } catch (error) {
      res.status(500).json({
        Erro: error,
      });
      return;
    }
  }

  static async resetPassword(req: Request, res: Response) {
    try {
      const senha_nova = req.body.senha_nova;

      const { authorization } = req.headers;

      const usuario_id = req.body.id_usuario;

      if (!authorization) {
        res.status(401).json({
          Message: `Erro de autorização. Token invalido`,
        });
        return;
      }

      const token = authorization.split(" ")[1];
      console.log(token)

      const { idToken } = jwt.verify(
        token,
        process.env.SECRET_KEY
      ) as TokenPasswordPayload;

      console.log("AAAAAA",  idToken)

      if (idToken != usuario_id) {  
        res.status(401).json({
          Erro: "Token inválido, idToken diferente",
        });
        return;
      }

      await updateUserPassw(senha_nova, idToken);

      res.status(200).json({
        Message: "Senha alterada com sucesso.",
      });
    } catch (error) {
      res.status(500).json({
        Erro: "Erro interno no servidor.",
      });
    }
  }
}
