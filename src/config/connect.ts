import { Pool } from "pg";

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.NODE_ENV == "production"?{
    rejectUnauthorized: false,
    requestCert: true
  }:undefined
});

export { db };
