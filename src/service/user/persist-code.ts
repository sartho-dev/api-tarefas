import { getUserById } from "./login/login-user";
import fs from "fs/promises"
import path from "path"

export async function saveCode(code: string, usuario_id: number) {
    const caminho = path.resolve(`./src/temp/${usuario_id}.sav`)
    fs.writeFile(caminho, code)
    
    
}