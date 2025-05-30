import { db } from "../../../config/connect";

export async function listTask(listaTarefaId: number) {
  const result = await db.query(
    `
    SELECT titulo, concluida
    FROM tarefa
    WHERE lista_tarefa_id = $1
    ORDER BY
      CASE prioridade
        WHEN 'Alta' THEN 1
        WHEN 'Média' THEN 2
        WHEN 'Baixa' THEN 3
        ELSE 4
      END,
      data_tarefa ASC NULLS LAST,
      concluida ASC
    `,
    [listaTarefaId]
  );

  return result.rows;
}
