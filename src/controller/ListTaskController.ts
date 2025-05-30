import { Request, Response } from "express";
import { createListTask } from "../service/list/create/create-list-task";
import { ListaTarefa } from "../model/ListaTarefa";
import { selectListUser } from "../service/list/select/list-task-user";

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
}
