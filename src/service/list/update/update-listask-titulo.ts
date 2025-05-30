import { db } from "../../../config/connect";

export async function updateListTaskTitulo(new_titulo:string, lista_tarefa_id:number) {
    await db.query("update lista_tarefa set nome = $1 where id = $2",[new_titulo,lista_tarefa_id])
}