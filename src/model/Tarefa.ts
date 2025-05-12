export class Tarefa {
  constructor(
    
    public titulo: string,
    public descricao: string,
    public data_tarefa: Date,
    public prioridade: string,
    public usuario_id: number
  ) {}
}
