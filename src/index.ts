import "dotenv/config";
import express from "express";
import { router } from "./routes/router";

import session from "express-session";

//express() é uma função que retorna um objeto
const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.PORT_SERVER);
