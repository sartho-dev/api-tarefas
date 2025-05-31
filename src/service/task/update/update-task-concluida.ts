import { db } from "../../../config/connect";

export async function updateTaskConcluida(concluida:boolean, id_tarefa:number) {
    await db.query("update tarefa set concluida = $1 where id = $2",[concluida,id_tarefa])
}