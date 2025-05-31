import { Response, Request } from "express";
import { create } from "../service/task/create/create.task";
import { Tarefa } from "../model/Tarefa";
import { deleteAllTask } from "../service/task/delete/delete-alltask";
import { listTask } from "../service/task/select/select-task-ord-geral";
import { deleteOneTask } from "../service/task/delete/delete-one-task";
import { updateTaskService } from "../service/task/update/update.task";
import { selectTaskOrdPriority } from "../service/task/select/select-task-ord-prioridade";
import { selectTaskOrdData } from "../service/task/select/select-task-ord-data";
import { selectTaskOrdAlf } from "../service/task/select/select-task-ord-alf";
import { updateTaskTitulo } from "../service/task/update/update-task-titulo";
import { updateTaskDescription } from "../service/task/update/update-task-description";
import { updateTaskPriority } from "../service/task/update/update-task-priority";
import { updateTaskDate } from "../service/task/update/update-task-date";
import { updateTaskConcluida } from "../service/task/update/update-task-concluida";

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

  
  static async updateTask(req: Request, res: Response) {
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

  static async listTaskByPriority(req: Request, res: Response) {
    try {
      const titulo = req.body.titulo;
      const lista_tarefa_id = req.body.lista_tarefa_id;

      const tasks = await selectTaskOrdPriority(titulo || "", lista_tarefa_id);

      res.status(200).json({
        Message: "Tarefas listadas por prioridade",
        tasks,
      });
    } catch (error) {
      res.status(500).json({
        Erro: "Erro ao lista tarefas por prioridade",
      });
    }
  }

  static async listTaskByData(req: Request, res: Response) {
    try {
      const titulo = req.body.titulo;
      const lista_tarefa_id = req.body.lista_tarefa_id;

      const tasks = await selectTaskOrdData(titulo || "", lista_tarefa_id);

      res.status(200).json({
        Message: "Tarefas listadas por data",
        tasks,
      });
    } catch (error) {
      res.status(500).json({
        Erro: "Erro ao lista tarefas por data",
      });
    }
  }

  static async listTaskByAlf(req: Request, res: Response) {
    try {
      const titulo = req.body.titulo;
      const lista_tarefa_id = req.body.lista_tarefa_id;

      const tasks = await selectTaskOrdAlf(titulo || "", lista_tarefa_id);

      res.status(200).json({
        Message: "Tarefas listadas pela ordem alfabética do titulo",
        tasks,
      });
    } catch (error) {
      res.status(500).json({
        Erro: "Erro ao lista tarefas pela ordem alfabética do titulo",
      });
    }
  }

  static async updateTitulo(req: Request, res: Response) {
    try{
      const titulo = req.body.titulo;
      const tarefa_id = req.body.tarefa_id;

      await updateTaskTitulo(titulo, tarefa_id);
      res.status(200).json({
        Message: `Título alterado para ${titulo}`
      });

    } catch (error){
      res.status(500).json({
        Erro: "Erro ao mudar título",
      });

    }
  }

  static async updateDescription(req: Request, res: Response) {
    try{
      const description = req.body.descricao;
      const tarefa_id = req.body.tarefa_id;

      await updateTaskDescription(description, tarefa_id);
      res.status(200).json({
        Message: `Descrição alterado para '${description}'`
      });

    } catch (error){
      res.status(500).json({
        Erro: "Erro ao mudar descrição",
      });

    }
  }

  static async updatePriority(req: Request, res: Response) {
    try{
      const prioridade = req.body.prioridade;
      const tarefa_id = req.body.tarefa_id;

      await updateTaskPriority(prioridade, tarefa_id);
      res.status(200).json({
        Message: `Prioridade alterada para ${prioridade}`
      });

    } catch (error){
      res.status(500).json({
        Erro: "Erro ao mudar prioridade",
      });

    }
  }

  static async updateDate(req: Request, res: Response) {
    try{
      const date = new Date(req.body.data_tarefa);
      const tarefa_id = req.body.tarefa_id;
      
      await updateTaskDate(date, tarefa_id);
      res.status(200).json({
        Message: `Data alterada para ${date}`
      });

    } catch (error){
      res.status(500).json({
        Erro: "Erro ao mudar data",
      });

    }
  }

  static async updateConcluida(req: Request, res: Response) {
    try{
      const concluida = req.body.concluida === 'true' || req.body.concluida === true;
      const tarefa_id = req.body.tarefa_id;
      
      await updateTaskConcluida(concluida, tarefa_id);
      res.status(200).json({
        Message: `Status de concluido da tarefa alterada`
      });

    } catch (error){
      res.status(500).json({
        Erro: "Erro ao mudar status de concluido",
      });

    }
  }
}
