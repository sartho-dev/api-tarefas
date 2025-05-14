import { db } from "../../config/connect";
import { Tarefa } from "../../model/Tarefa";

export async function updateTask(tarefa: Tarefa) {
  await db.query(
    "update tarefa set titulo = $1, descricao = $2, data_tarefa = $3, prioridade = $4 where id = $5 ",
    [
      tarefa.titulo,
      tarefa.descricao,
      tarefa.data_tarefa,
      tarefa.prioridade,
      tarefa.usuario_id,
    ]
  );
}
