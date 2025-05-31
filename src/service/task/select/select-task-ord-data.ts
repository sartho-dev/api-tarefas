import { db } from "../../../config/connect";

export async function selectTaskOrdData(
  lista_tarefa_id: number
) {
  const result = await db.query(
    "select * from tarefa where lista_tarefa_id = $1 order by data_tarefa ASC",
    [lista_tarefa_id]
  );

  return result.rows;
}
