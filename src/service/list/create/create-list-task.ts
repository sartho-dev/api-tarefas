import { db } from "../../../config/connect";
import { ListaTarefa } from "../../../model/ListaTarefa";

export async function createListTask(listaTarefa: ListaTarefa) {
  await db.query(
    "insert into lista_tarefa (nome, usuario_id) values ($1, $2)",
    [listaTarefa.nome, listaTarefa.usuario_id]
  );
}
