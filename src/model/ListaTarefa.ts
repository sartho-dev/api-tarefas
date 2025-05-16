import { Tarefa } from "./Tarefa";

export class ListaTarefa {
  constructor(
    public nome: string,
    public usuario_id: number,
    public tarefas: Tarefa[] = [],
    public id?: number,
  ) {}
}
