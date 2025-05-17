import { Request, Response } from "express";
import jwt  from "jsonwebtoken";
import nodemailer from 'nodemailer'


function gerarCodigo(){
    return Math.floor(1000 + Math.random() * 9000);

}

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

export async function sendEmailUser(to: string, subject: string) {
    const codigo = gerarCodigo();

    const texto = `Seu codigo de verificação é: ${codigo}`;


        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to,
            subject,
            text: texto
        })
    
    
    return codigo;
}

export async function sendUrlUser(email: string, url: string){
    
    const titulo = "Conclua o cadastro"

    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject : titulo,
        text: `Aqui está o link de confirmação: ${url}`
    })
    
}