import { db } from "../../../config/connect";

export async function updateTaskTitulo(new_titulo:string, id_tarefa:number) {
    await db.query("update tarefa set titulo = $1 where id = $2",[new_titulo,id_tarefa])
}