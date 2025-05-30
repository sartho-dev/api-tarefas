import { db } from "../../../config/connect";

export async function updateTaskPriority(new_priority:string, id_tarefa:number) {
    await db.query("update tarefa set prioridade = $1 where id = $2",[new_priority,id_tarefa])
}