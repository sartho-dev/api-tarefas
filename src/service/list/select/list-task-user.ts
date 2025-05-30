import { db } from "../../../config/connect";

export async function selectListUser(usuario_id: number) {
  const result = await db.query(
    "select * from lista_tarefa where usuario_id = $1",
    [usuario_id]
  );
  return result.rows;
}
