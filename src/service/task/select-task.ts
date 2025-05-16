import { db } from "../../config/connect";

export async function listTask(lista_tarefa_id: number) {
  const result = await db.query(
    `SELECT 
      id, 
      titulo, 
      descricao, 
      data_tarefa, 
      prioridade, 
      concluida
    FROM tarefa
    WHERE lista_tarefa_id = $1
    ORDER BY
      CASE prioridade
        WHEN 'alta' THEN 1
        WHEN 'media' THEN 2
        WHEN 'baixa' THEN 3
        ELSE 4
      END,
      data_tarefa ASC,
      concluida ASC`,
    [lista_tarefa_id]
  );

  return result.rows;
}
