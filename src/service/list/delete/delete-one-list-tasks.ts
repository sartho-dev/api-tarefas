import { db } from "../../../config/connect";

export async function deleteOneListTask(id:number) {
    await db.query("delete from tarefa where lista_tarefa_id = $1", [id]);
    await db.query("delete from lista_tarefa where id = $1", [id]);
}