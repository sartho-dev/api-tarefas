import { ListaTarefa } from "./ListaTarefa";
import { Tarefa } from "./Tarefa";

export class Usuario {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public senha: string,
    public lista_tarefas: ListaTarefa[] = []
  ) {}
}
