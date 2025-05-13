import { db } from "../../config/connect";

export async function deleteUserService(id: number) {
  await db.query("delete from usuario where id = $1", [id]);
}
