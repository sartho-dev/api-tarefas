import { Tarefa } from "../../model/Tarefa";
import { db } from "../../config/connect";

export async function create(tarefa: Tarefa) {
  await db.query(
    "insert into tarefa (titulo,descricao,data_tarefa,prioridade, usuario_id) values ($1,$2,$3,$4,$5)",
    [
      tarefa.titulo,
      tarefa.descricao,
      tarefa.data_tarefa,
      tarefa.prioridade,
      tarefa.usuario_id,
    ]
  );
}
