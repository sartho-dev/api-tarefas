import { Request, Response } from "express";
import { sendEmailUser } from "../service/nodemailer";
import jwt from "jsonwebtoken";

export function sendEmailController(req: Request, res: Response) {
    const emailUsuario = req.body.email

    const titulo = "Código de confirmação"

    const codigoUsuario = sendEmailUser(emailUsuario, titulo);
    
    const token =  jwt.sign({emailUsuario, codigoUsuario}, process.env.SECRET_KEY, {
        expiresIn: "1h"
    })

    console.log(token);

    res.status(200).json({
        Message: "Código enviado com sucesso",
        token,
    })
    
}

