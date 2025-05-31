import { db } from "../../../config/connect";

export async function selectTaskOrdAlf(
  lista_tarefa_id: number
) {
  const result = await db.query(
    `select * from tarefa 
    where lista_tarefa_id = $1
    order by lower(titulo) ASC`,
    [lista_tarefa_id]
  );

  return result.rows;
}
