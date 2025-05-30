import { db } from "../../../config/connect";
import bcrypt from "bcrypt";

export async function updateUserPassw(senha_nova: string, id_usuario: number) {
  const hash_senha = await bcrypt.hash(senha_nova, 10);

  await db.query("update usuario set senha = $1 where id = $2", [
    hash_senha,
    id_usuario,
  ]);
}
