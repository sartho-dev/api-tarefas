import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getUserById } from "../service/user/login/login-user";
import { selectUserIdfromList } from "../service/list/select/select-id-task";
import { selectIdfromListaTarefaId } from "../service/task/select/selectIdfromListaTarefa";
import { Usuario } from "../model/Usuario";

type JwtPayload = {
  id: number;
};

export async function autenticarToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(401).json({
        Message: `Erro de autorização. Token invalido`,
      });
      return;
    }

    const token = authorization.split(" ")[1];

    const { id } = jwt.verify(token, process.env.SECRET_KEY) as JwtPayload;

    const user = await getUserById(id);

    if (!user) {
      res.status(404).json({
        Message: `Erro ao buscar de usuário ${id}`,
      });
      return;
    }

    if (!user.valido) {
      res.status(401).json({
        Erro: "Erro de validação",
      });
      return;
    }

    //TODO: Adicionar verificaçõpes de usuário com conteúdo do req.body

    if (req.query.usuario_id) {
      if (Number(req.query.usuario_id)!= id) {
        res.status(401).json({
          Erro: "Não autorizado",
        });
        return;
      }
    }

    if (Number(req.query.lista_tarefa_id)) {
      const usuario_id = await selectUserIdfromList(Number(req.query.lista_tarefa_id));

      if (id != usuario_id) {
        res.status(401).json({
          Erro: "Erro de autorização",
        });
        return;
      }
    }

    if (req.query.tarefa_id) {

      const idListaTarefa = await selectIdfromListaTarefaId(Number(req.query.tarefa_id));

      const usuarioId = await selectUserIdfromList(idListaTarefa);

      if (usuarioId != id) {
        res.status(401).json({
          Erro: "Erro de autorização",
        });
        return;
      }
    }

    if (req.body.prioridade) {
      if (req.body.prioridade != "Alta" && req.body.prioridade != "Media" && req.body.prioridade != "Baixa"){
        res.status(406).json({
          Erro: "Prioridade inválida"
        });
        return;
      }

    }

    next();
  } catch (error) {
    res.status(500).json({
      Erro: "SAFADO",
    });
    return;
  }

  
}
