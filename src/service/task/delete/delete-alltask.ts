import { db } from "../../../config/connect";

export async function deleteAllTask(lista_tarefa_id: number) {
  await db.query("delete from tarefa where lista_tarefa_id = $1", [
    lista_tarefa_id,
  ]);
}
