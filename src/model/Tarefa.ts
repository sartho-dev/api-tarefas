export class Tarefa {
  constructor(
    public titulo: string,
    public descricao: string,
    public data_tarefa: Date,
    public prioridade: string,
    public concluida: boolean,
    public lista_tarefa_id?: number,
    public id?: number
  ) {}
}
