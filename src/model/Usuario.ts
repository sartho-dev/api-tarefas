import { ListaTarefa } from "./ListaTarefa";
import { Tarefa } from "./Tarefa";

export class Usuario {
  constructor(
    
    public nome: string,
    public email: string,
    public senha: string,
    public lista_tarefas: ListaTarefa[] = [],
    public id?: number
  ) {}
}
