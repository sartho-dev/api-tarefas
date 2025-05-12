import { Tarefa } from "../../model/Tarefa";
import { db } from "../../config/connect";

export async function deleteTask(id: number) {
  await db.query("delete from tarefa where id = $1", [id]);
}
