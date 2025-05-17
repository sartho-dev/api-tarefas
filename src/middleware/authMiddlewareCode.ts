import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

type TokenCodigoPayload = {
  email: string,
  codigo: number
};

export function verificarTokenCodigo(req: Request, res: Response) {
    const { authorization} = req.headers

    const codigoDigitado = req.body.codigoDigitado

    if(!authorization){
      res.status(401).json({
      Message: `Erro de autorização. Token invalido`,
    });
    return;
    }

    const token = authorization.split(" ")[1];



    const {email, codigo} = jwt.verify(token, process.env.SECRET_KEY) as TokenCodigoPayload;

    if(Number(codigoDigitado) == codigo){
      res.json({
        Message: `Código confirmado com sucesso vindo do ${email}`
      })
      return;
    }else{
      res.status(500).json({
        Erro: "Codigo incorreto"
      });
      return;
    }

}