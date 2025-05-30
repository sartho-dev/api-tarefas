import { db } from "../../../config/connect";

export async function updateTaskDate(new_date:Date, id_tarefa:number) {
    await db.query("update tarefa set data_tarefa = $1 where id = $2",[new_date,id_tarefa])
}