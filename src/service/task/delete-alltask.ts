import { db } from "../../config/connect";

export async function deleteAllTask(usuario_id: number) {
  await db.query("delete from tarefa where usuario_id = $1", [usuario_id]);
}
