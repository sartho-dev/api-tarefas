import 'dotenv/config'
import express from "express";
import { router } from "./routes/router";

import session from "express-session";


//express() é uma função que retorna um objeto
const app = express();

app.use(
  session({
    secret: "10349203421234",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());

app.use(router);

app.listen(8081);
