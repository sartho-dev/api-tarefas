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

export function UserValidHtml(){
  return ` <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Validação Concluída</title>
  <style>
    body {
      background-color: #f0f4f8;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .card {
      background-color: white;
      border-radius: 12px;
      padding: 30px 40px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 400px;
    }

    .card h1 {
      color: #2e7d32;
      margin-bottom: 10px;
    }

    .card p {
      color: #555;
      font-size: 16px;
      margin-top: 0;
    }

    .check-icon {
      font-size: 60px;
      color: #4caf50;
      margin-bottom: 20px;
    }

    .btn-voltar {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }

    .btn-voltar:hover {
      background-color: #388e3c;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="check-icon">✔️</div>
    <h1>Validação bem-sucedida!</h1>
    <p>Seu acesso foi confirmado. Agora você pode continuar.</p>
    
  </div>
</body>
</html>
`
}
