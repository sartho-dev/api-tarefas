import { db } from "../../../config/connect";

export async function selectUserIdfromList(lista_tarefa_id: number) {
  const result = await db.query(
    "select usuario_id from lista_tarefa where id = $1",
    [lista_tarefa_id]
  );
  return result.rows[0].usuario_id;
}


