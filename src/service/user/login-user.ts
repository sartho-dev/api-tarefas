import { db } from "../../config/connect";

export async function loginUser(email: string, senha: string) {
  const result = await db.query("select * from usuario where email = $1", [
    email,
  ]);

  const usuario = result.rows[0];

  if (usuario.senha === senha) {
    return usuario;
  } else {
    throw new Error("Senha incorreta");
  }
}
