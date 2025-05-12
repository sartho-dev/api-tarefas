import express from "express";
import { router } from "./routes/router";

import session from "express-session";

const app = express();

app.use(
  session({
    secret: "algo",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());

app.use(router);

app.listen(8081);
