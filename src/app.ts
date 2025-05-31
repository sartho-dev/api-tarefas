import "dotenv/config";
import express from "express";
import { router } from "./routes/router";

import cors from "cors"



//express() é uma função que retorna um objeto
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
export{app};