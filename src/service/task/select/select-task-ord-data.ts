import { db } from "../../../config/connect";

export async function selectTaskOrdData(
  titulo: string,
  lista_tarefa_id: number
) {
  const result = await db.query(
    "select * from tarefa where titulo ilike $1 and lista_tarefa_id = $2 order by data_tarefa ASC",
    [`%${titulo}%`, lista_tarefa_id]
  );

  return result.rows;
}
