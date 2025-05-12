import { db } from "../../config/connect";

export async function deleteUserService(nome: string) {
  await db.query("delete from usuario where nome = $1", [nome]);
}
