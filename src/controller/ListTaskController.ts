import { Request, Response } from "express";
import { createListTask } from "../service/list/create/create-list-task";
import { ListaTarefa } from "../model/ListaTarefa";

import { selectListUser } from "../service/list/select/list-task-user";
import { deleteOneListTask } from "../service/list/delete/delete-one-list-tasks";
import { deleteAllListTask } from "../service/list/delete/delete-all-list-tasks";
import { updateListTaskTitulo } from "../service/list/update/update-listask-titulo";




export class ListTaskController {
  static async createListTask(req: Request, res: Response) {
    try {
      const listTask = new ListaTarefa(
        req.body.nome,
        req.body.usuario_id
      );

      if (!listTask) {
        res.status(400).json({
          Erro: "Nome da lista é obrigatório",
        });
        return;
      }

      await createListTask(listTask);

      res.status(200).json({
        Message: "Lista criada com sucesso",
      });
    } catch (error) {
      res.status(500).json({
        Erro: "Erro ao criar lista " + error,
      });
    }
  }

  static async listTask(req: Request, res: Response) {
    try {
      const listUser = await selectListUser(req.body.usuario_id);

      res.status(200).json(listUser);
      return;
    } catch (error) {
      res.status(500).json({
        Erro: "Erro ao selecionar as listas de usuario",
      });
    }
  }

  static async deleteOneListTask(req: Request, res: Response) {
      try {
        await deleteOneListTask(req.body.id);
  
        res.status(200).json({
          Message: "A deleção da lista foi feita com sucesso",
        });
  
        return;
      } catch (error) {
        res.status(500).json({
          Erro: "A deleção da lista não foi possivel",
        });
        return;
      }
    }
  static async deleteAllListTask(req: Request, res: Response) {
      try {
        await deleteAllListTask(req.body.usuario_id);
  
        res.status(200).json({
          Message: "A deleção das listas funcionou.",
        });
        return;
      } catch (error) {
        res.status(500).json({
          Message: "Erro. A deleção das listas não funcionou",
        });
        return;
      }
    }

  static async updateListaTitulo(req: Request, res: Response) {
      try{
        const titulo = req.body.nome;
        const lista_tarefa_id = req.body.lista_tarefa_id;
  
        await updateListTaskTitulo(titulo, lista_tarefa_id);
        res.status(200).json({
          Message: `Título da lista alterado para ${titulo}`
        });
  
      } catch (error){
        res.status(500).json({
          Erro: "Erro ao mudar título",
        });
  
      }
    }
}
