import { Pool } from "pg";

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "projeto-mega",
  password: "1234",
  port: 5432,
});

export { db };
