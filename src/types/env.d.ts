declare namespace NodeJS {
  interface ProcessEnv {
    DB_PORT: number;
    DB_USER: string;
    DB_HOST: string;
    DB_DATABASE: string;
    DB_PASSWORD: string;
    SECRET_KEY: string;
    PORT_SERVER: number;
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_USER: string;
    MAIL_PASS: string;
    VECTOR: string,
    KEY: string
  }
}
