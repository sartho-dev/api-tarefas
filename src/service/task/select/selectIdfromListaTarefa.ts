import { db } from "../../../config/connect";

export async function selectIdfromListaTarefaId(id: number) {
  const result = await db.query(
    "select lista_tarefa_id from tarefa where id = $1",
    [id]
  );
  return result.rows[0].lista_tarefa_id;
}