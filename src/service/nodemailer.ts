import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { muitoFrontEnd } from "./html";


const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendEmailUser(email: string, code: string) {
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: "Codigo de recuperação de senha",
    html: muitoFrontEnd(code),
  });
}

export async function sendUrlUser(email: string, url: string) {
  const titulo = "Conclua o cadastro";

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: titulo,
    text: `Aqui está o link de confirmação: ${url}`,
  });
}
