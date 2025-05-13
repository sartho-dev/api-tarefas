import { Response, Request } from "express";
import { create } from "../service/task/create.task";
import { deleteTask } from "../service/task/delete.task";
import { Tarefa } from "../model/Tarefa";
import { parseISO } from "date-fns";

export class TaskController {
  async createTask(req: Request, res: Response) {
    const user_ident = req.session.userId;

    if (!user_ident) {
      res.status(401).json({
        Message: "Usuário não logado",
      });
      return;
    }
    const dataTarefa = parseISO(req.body.data);
    try {
      const tarefa = new Tarefa(
        req.body.titulo,
        req.body.descricao,
        dataTarefa,
        req.body.prioridade,
        user_ident!
      );

      await create(tarefa);

      res.status(200).json({
        Message: "A tarefa foi criada",
      });
      return;
    } catch (error) {
      res.status(500).json({
        Message: "Erro. A tarefa nao foi criada",
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
      res.status(200).json({
        Message: "Erro. A deleção não funcionou",
      });
      return;
    }
  }
}

const taskController = new TaskController();

export { taskController };
