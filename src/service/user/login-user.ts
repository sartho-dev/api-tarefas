import { db } from "../../config/connect";

export async function getUserByEmail(email: string) {
  const result = await db.query("select * from usuario where email = $1", [
    email,
  ]);

  const usuario = result.rows[0];

  if (usuario) {
    return usuario;
  } else {
    return false;
  }
}

export async function getUserById(id: number) {
  const result = await db.query("select * from usuario where id = $1", [id]);

  const usuario = result.rows[0];

  if (usuario) {
    return usuario;
  } else {
    return false;
  }
}

export async function getListIdUserById(id: number) {
  const result = await db.query("select * from lista_tarefa where usuario_id = $1", [id]);

  const usuario = result.rows[0].usuario_id;

  if (usuario) {
    return usuario;
  } else {
    return false;
  }
}



export async function getIdUserByEmail(email: string) {
  const result = await db.query("select id from usuario where email = $1", [
    email,
  ]);

  const id = result.rows[0].id as number;

  return id ?? false;
}