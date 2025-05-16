import { Router } from "express";
import { UserController } from "../controller/UserController";
import { TaskController } from "../controller/TaskController";
import { autenticarToken } from "../middleware/authMiddleware";
import { ListTaskController } from "../controller/ListTaskController";

const router = Router();

//Rotas de usuario
router.get("/", UserController.index);
router.post("/login", UserController.loginUser);
router.post("/create/user", UserController.createUser);

//Rotas de tarefa
router.post("/create/task", autenticarToken, TaskController.createTask);

router.delete("/delete/all-task", autenticarToken,TaskController.deleteAllTask);

router.delete("/delete/one/task", autenticarToken, TaskController.deleteTask);

router.post("/create/list/task", autenticarToken, ListTaskController.createListTask);

router.get("/select/list/task", autenticarToken, ListTaskController.listTask);

router.get("/select/task", autenticarToken, TaskController.listAllTask);


/*TODO: Falar com o front.
router.put("/update/task", autenticarToken, taskController.updateTask);
*/


export { router };
