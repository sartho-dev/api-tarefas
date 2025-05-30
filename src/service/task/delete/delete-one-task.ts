import { db } from "../../../config/connect";

export async function deleteOneTask(id: number) {
  await db.query("delete from tarefa where id = $1", [id]);
}
