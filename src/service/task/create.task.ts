import { Tarefa } from "../../model/Tarefa";
import { db } from "../../config/connect";

export async function create(tarefa: Tarefa) {
  await db.query(
    "insert into tarefa (titulo,descricao,data_tarefa,prioridade,concluida, lista_tarefa_id) values ($1,$2,$3,$4,$5,$6)",
    [
      tarefa.titulo,
      tarefa.descricao,
      tarefa.data_tarefa,
      tarefa.prioridade,
      tarefa.concluida,
      tarefa.lista_tarefa_id ?? null,
    ]
  );
}
