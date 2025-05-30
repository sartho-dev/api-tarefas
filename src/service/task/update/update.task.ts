import { db } from "../../../config/connect";
import { Tarefa } from "../../../model/Tarefa";

export async function updateTaskService(tarefa: Tarefa) {
  const result = await db.query(
    "update tarefa set titulo = $1, descricao = $2, data_tarefa = $3, prioridade = $4, lista_tarefa_id = $5 where id = $6 ",
    [
      tarefa.titulo,
      tarefa.descricao,
      tarefa.data_tarefa,
      tarefa.prioridade,
      tarefa.lista_tarefa_id,
      tarefa.id,
    ]
  );

  return result.rows;
}
