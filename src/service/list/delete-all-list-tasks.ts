import { db } from "../../config/connect";

export async function deleteAllListTask(usuario_id: number) {
  await db.query(
    "delete from tarefa where lista_tarefa_id in (select id from lista_tarefa where usuario_id = $1)", [
    usuario_id,
  ]);
  await db.query(
    "delete from lista_tarefa where usuario_id = $1", [
    usuario_id,
  ]);
}