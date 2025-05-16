import "dotenv/config";

import { db } from "../config/connect";

async function generate() {
  await db.query(`-- Table: public.usuario

-- DROP TABLE IF EXISTS public.usuario;

CREATE TABLE IF NOT EXISTS public.usuario
(
    id serial NOT NULL,
    nome text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    senha text COLLATE pg_catalog."default",
    CONSTRAINT usuario_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuario
    OWNER to postgres;
    
    -- Table: public.lista_tarefa

-- DROP TABLE IF EXISTS public.lista_tarefa;

CREATE TABLE IF NOT EXISTS public.lista_tarefa
(
    id serial NOT NULL,
    nome text COLLATE pg_catalog."default",
    usuario_id integer,
    CONSTRAINT lista_tarefa_pkey PRIMARY KEY (id),
    CONSTRAINT lista_tarefa_usuario_id_fkey FOREIGN KEY (usuario_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.lista_tarefa
    OWNER to postgres;

    -- Table: public.tarefa

-- DROP TABLE IF EXISTS public.tarefa;

CREATE TABLE IF NOT EXISTS public.tarefa
(
    id serial NOT NULL,
    titulo text COLLATE pg_catalog."default",
    descricao text COLLATE pg_catalog."default",
    data_tarefa date,
    prioridade text COLLATE pg_catalog."default",
    concluida boolean DEFAULT false,
    lista_tarefa_id integer,
    usuario_id_tarefa integer,
    CONSTRAINT tarefa_pkey PRIMARY KEY (id),
    CONSTRAINT tarefa_lista_tarefa_id_fkey FOREIGN KEY (lista_tarefa_id)
        REFERENCES public.lista_tarefa (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT tarefa_usuario_id_tarefa_fkey FOREIGN KEY (usuario_id_tarefa)
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
