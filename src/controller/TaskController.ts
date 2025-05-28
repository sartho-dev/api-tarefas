import { Response, Request } from "express";
import { create } from "../service/task/create.task";
import { Tarefa } from "../model/Tarefa";
import { deleteAllTask } from "../service/task/delete-alltask";
import { listTask } from "../service/task/select-task";
import { deleteOneTask } from "../service/task/delete-one-task";
import { updateTaskService } from "../service/task/update.task";

export class TaskController {
  static async createTask(req: Request, res: Response) {
    const dataTarefa = new Date(req.body.data_tarefa);
    try {
      const tarefa = new Tarefa(
        req.body.titulo,
        req.body.descricao,
        dataTarefa,
        req.body.prioridade,
        req.body.concluida,
        req.body.lista_tarefa_id
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

  static async deleteTask(req: Request, res: Response) {
    try {
      await deleteOneTask(req.body.tarefa_id);

      res.status(200).json({
        Message: "A deleção foi feita com sucesso",
      });

      return;
    } catch (error) {
      res.status(500).json({
        Erro: "A deleção não foi possivel",
      });
      return;
    }
  }

  static async deleteAllTask(req: Request, res: Response) {
    try {
      await deleteAllTask(req.body.lista_tarefa_id);

      res.status(200).json({
        Message: "A deleção funcionou.",
      });
      return;
    } catch (error) {
      res.status(500).json({
        Message: "Erro. A deleção não funcionou",
      });
      return;
    }
  }

  static async listAllTask(req: Request, res: Response) {
    try {
      const lista_tarefa_id = req.body.lista_tarefa_id;

      const tarefas = await listTask(lista_tarefa_id);

      res.status(200).json(tarefas);

      return;
    } catch (error) {
      res.status(500).json({
        Erro: "Erro ao listar as tarefas",
      });
    }
  }

  /*TODO: implementar depois de conversar com o front 
  async updateTask(req: Request, res: Response) {
    try {
      const tarefa = new Tarefa(
        req.body.titulo,
        req.body.descricao,
        req.body.data_tarefa,
        req.body.prioridade,
        req.body.lista_tarefa_id,
        req.body.usuario_id,
        req.body.id
      );
      const tarefa_atual = await updateTaskService(tarefa);

      res.status(200).json(tarefa_atual);
      return;
    } catch (error) {
      res.status(500).json({
        Message: "A tarefa não foi atualizada",
      });
      return;
    }
  }*/
}


