import { db } from "../../config/connect";
import fs from "fs"
import path from "path"


export async function validUserService(email: string) {
    await db.query("update usuario set valido = true where email = $1", [email])
    
}


export async function validCode4(id: number, code: string) {
    const caminho = path.resolve(`./src/temp/${id}.sav`)

    const fCode = fs.readFileSync(caminho).toString("utf-8")
    
    console.log(fCode)

    return fCode == code;
}