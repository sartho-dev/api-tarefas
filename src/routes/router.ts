import { Router } from "express";
import { userController } from "../controller/UserController";
import { taskController } from "../controller/TaskController";
import { autenticarToken } from "../middleware/authmiddleware";

const router = Router();

router.get("/", userController.index);

//Rota de login
router.post("/login", userController.loginUser);

//Rotas que criam
router.post("/create/user", userController.createUser);
router.post("/create/task", autenticarToken, taskController.createTask);

//Rotas que deletam
router.delete("/delete/task", taskController.deleteTask);

//Rota que atualiza

export { router };
