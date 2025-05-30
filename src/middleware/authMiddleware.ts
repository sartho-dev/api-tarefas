import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getUserById } from "../service/user/login-user";

type JwtPayload = {
  id: number;
};



export async function autenticarToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      Message: `Erro de autorização. Token invalido`,
    });
    return;
  }

  const token = authorization.split(" ")[1];

  const { id } = jwt.verify(token, process.env.SECRET_KEY) as JwtPayload;

  const user = await getUserById(id);

  if (!user) {
    res.status(404).json({
      Message: `Erro ao buscar de usuário ${id}`,
    });
    return;
  }

  if(!user.valido){
    res.status(401).json({
      Erro: "Erro de validação"
    })
    return
  }
  if(req.body.usuario_id){
    if(req.body.usuario_id != id){
      res.status(401).json({
        Erro: "Usuario errado"
      })
      return
    }
   }
  
  next();
}





