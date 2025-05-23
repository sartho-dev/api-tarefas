import "dotenv/config";
import supertest from "supertest"
import {app} from "../app"
import { create } from "../service/user/create-user";
import { db } from "../config/connect";

let usuarioToken: string;
const usuario = {
                    nome : "Teste",
                    email : "teste@email",
                    senha : "senha123",
                };
let url_usuario: string;
    

describe("Testar as rotas de usuario",()=>{
    it("Iniciar",async()=>{
        const response = await supertest(app).get("/");

        await db.query("DELETE FROM usuario; DELETE FROM tarefa; DELETE FROM lista_tarefa");
        

        expect(response.status).toBe(200);
    });
    it("Criar usuario",async()=>{
        const response = await supertest(app)
        .post("/create/user")
        .send(usuario).set('Content-Type', 'application/json')
        .set('Accept', 'application/json');     
        url_usuario = response.body.Email;
        expect(response.status).toBe(201);
    });
    it("Login",async()=>{
        const response = await supertest(app)
        .post("/login")
        .send({
            email: usuario.email,
            senha: usuario.senha
        });
        usuarioToken = response.body.token;
        expect(response.status).toBe(200);
        expect(response.body.user.nome).toBe(usuario.nome);
        expect(response.body.user.email).toBe(usuario.email);
    });
    it("Validando usuario",async()=>{
        const response = await supertest(app).
        patch("/valid/" + url_usuario.split("/")[4]);
        
        expect(response.status).toBe(200);
    })

});

describe