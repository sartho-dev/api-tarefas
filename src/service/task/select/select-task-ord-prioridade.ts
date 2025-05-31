import { db } from "../../../config/connect";

export async function selectTaskOrdPriority(
  titulo: string,
  listaTarefaId: number
) {
  const result = await db.query(
    `select * from tarefa 
        where titulo ilike $1 and lista_tarefa_id = $2 
        order by 
          case prioridade
            when 'Alta' then 1
            when 'Média' then 2
            when 'Baixa' then 3
            else 4
          end  
          `,
    [`%${titulo}%`, listaTarefaId]
  );
  return result.rows;
}
