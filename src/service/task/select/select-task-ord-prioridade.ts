import { db } from "../../../config/connect";

export async function selectTaskOrdPriority(
  listaTarefaId: number
) {
  const result = await db.query(
    `select * from tarefa where
        lista_tarefa_id = $1
        order by 
          case prioridade
            when 'Alta' then 1
            when 'Média' then 2
            when 'Baixa' then 3
            else 4
          end  
          `,
    [listaTarefaId]
  );
  return result.rows;
}
