import { db } from "../../config/connect";

export async function validUserService(email: string) {
    await db.query("update usuario set valido = true where email = $1", [email])
    
}