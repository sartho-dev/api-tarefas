import { Response, Request } from "express";
import { create } from "../service/task/create.task";
import { deleteTask } from "../service/task/delete.task";
import { Tarefa } from "../model/Tarefa";

export class TaskController {
  async createTask(req: Request, res: Response) {
    const dataTarefa = new Date(req.body.data_tarefa);
    try {
      const tarefa = new Tarefa(
        req.body.titulo,
        req.body.descricao,
        dataTarefa,
        req.body.prioridade,
        req.body.usuario_id
      );

      await create(tarefa);

      res.status(200).json({
        Message: "A tarefa foi criada",
      });
      return;
    } catch (error) {
      res.status(500).json({
        Message: `Erro ${error} ${dataTarefa} . A tarefa nao foi criada`,
      });
      return;
    }
  }
  async deleteTask(req: Request, res: Response) {
    try {
      await deleteTask(req.body.id);

      res.status(500).json({
        Message: "A deleção funcionou.",
      });
      return;
    } catch (error) {
      res.status(401).json({
        Message: "Erro. A deleção não funcionou",
      });
      return;
    }
  }
}

const taskController = new TaskController();

export { taskController };
