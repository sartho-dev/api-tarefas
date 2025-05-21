import { db } from "../../config/connect";
import bcrypt from "bcrypt";

export async function create(nome: string, email: string, senha: string) {
  const hash_senha = await bcrypt.hash(senha, 10);
  await db.query(
    "insert into usuario(nome, email, senha) values ($1, $2, $3)",
    [nome, email, hash_senha]
  );
  
}


