import "dotenv/config";

import { db } from "../config/connect";

async function generate() {
  await db.query(`-- Table: public.usuario

-- DROP TABLE IF EXISTS public.usuario;

CREATE TABLE IF NOT EXISTS public.usuario
(
    id serial NOT NULL ,
    nome character varying(30) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" ,
    senha character varying(60) COLLATE pg_catalog."default",
    CONSTRAINT usuario_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuario
    OWNER to postgres;

    -- Table: public.tarefa

-- DROP TABLE IF EXISTS public.tarefa;

CREATE TABLE IF NOT EXISTS public.tarefa
(
    id serial NOT NULL,
    titulo character varying(100) COLLATE pg_catalog."default",
    descricao text COLLATE pg_catalog."default",
    data_tarefa date,
    prioridade character varying(15) COLLATE pg_catalog."default",
    usuario_id integer,
    CONSTRAINT tarefa_pkey PRIMARY KEY (id),
    CONSTRAINT tarefa_usuario_id_fkey FOREIGN KEY (usuario_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tarefa
    OWNER to postgres;
    
    `);
}

generate();
