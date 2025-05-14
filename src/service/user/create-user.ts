import { db } from "../../config/connect";
import { Usuario } from "../../model/Usuario";

export async function create(nome: string, email: string, senha: string) {
  await db.query(
    "insert into usuario(nome, email, senha) values ($1, $2, $3)",
    [nome, email, senha]
  );
}


