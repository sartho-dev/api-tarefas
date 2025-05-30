import { db } from "../../../config/connect";

export async function updateTaskDescription(new_description:string, id_tarefa:number) {
    await db.query("update tarefa set descricao = $1 where id = $2",[new_description,id_tarefa])
}