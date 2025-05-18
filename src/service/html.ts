export function muitoFrontEnd(code: string) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Seu código de verificação</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h2 style="color: #333;">Olá,</h2>
      <p style="font-size: 16px; color: #555;">
        Recebemos uma solicitação para verificar seu endereço de e-mail.
      </p>
      <p style="font-size: 16px; color: #555;">
        Use o código abaixo para concluir a verificação:
      </p>
      <p style="font-size: 32px; font-weight: bold; color: #007BFF; text-align: center; margin: 30px 0;">
        ${code}
      </p>
      <p style="font-size: 16px; color: #555;">
        Este código é válido por 10 minutos. Se você não solicitou esta verificação, pode ignorar este e-mail com segurança.
      </p>
      <p style="font-size: 16px; color: #555; margin-top: 40px;">
        Atenciosamente,<br />
        <strong>Equipe -> Equipe 09 do PS Mega Júnior</strong>
      </p>
    </div>
  </body>
</html>
`;
}
