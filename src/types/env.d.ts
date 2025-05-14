declare namespace NodeJS {
  interface ProcessEnv {
    DB_PORT: number;
    DB_USER: string;
    DB_HOST: string;
    DB_DATABASE: string;
    DB_PASSWORD: string;
    SECRET_SESSION: string;
    PORT_SERVER: number;
  }
}
