import { Request, Response } from "express";
import { create } from "../service/user/create-user";
import { deleteUserService } from "../service/user/delete-user";
import { loginUser } from "../service/user/login-user";

class UserController {
  async index(req: Request, res: Response) {
    res.json({
      Hello: "Alo do back-end, ta tudo bem? :) ",
    });
  }

  async createUser(req: Request, res: Response) {
    try {
      await create(req.body.nome, req.body.email, req.body.senha);

      res.json({
        Message: "Usuario criado com sucesso",
      });
    } catch (error) {
      res.json({
        Erro: "Não funcionou a criação",
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      await deleteUserService(req.body.nome);

      res.json({
        Resposta: "Deleção feita com sucesso",
      });
    } catch (error) {
      res.json({
        Erro: "Nao funcionou a deleção",
      });
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const usuario = await loginUser(req.body.email, req.body.senha);

      req.session.userId = usuario.id;

      res.json({
        Message: "Login deu certo",
      });
    } catch (error) {
      res.json({
        Erro: "Erro. Login nao deu certo",
      });
    }
  }
}

const userController = new UserController();

export { userController };
