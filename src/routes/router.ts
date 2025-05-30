import { Router } from "express";
import { UserController } from "../controller/UserController";
import { TaskController } from "../controller/TaskController";
import { autenticarToken } from "../middleware/authMiddleware";
import { ListTaskController } from "../controller/ListTaskController";
import { MailerController } from "../controller/MailerController";

const router = Router();

//Rotas de usuario
router.get("/", UserController.index);

router.post("/login", UserController.loginUser);

router.post("/create/user", UserController.createUser);

router.get("/valid/:code", UserController.validUser);

router.post("/forgot/password", MailerController.sendEmailController);

router.post("/confirm/code/email", MailerController.confirmCode);

router.post("/reset/password", MailerController.resetPassword);

//Rotas de tarefa
router.post("/create/task", autenticarToken, TaskController.createTask);

router.delete(
  "/delete/all/task",
  autenticarToken,
  TaskController.deleteAllTask
);

router.delete("/delete/one/task", autenticarToken, TaskController.deleteTask);

router.get("/select/task/priority", autenticarToken, TaskController.listTaskByPriority)

router.get("/select/task/data", autenticarToken, TaskController.listTaskByData)

router.get("/select/task/alf", autenticarToken, TaskController.listTaskByAlf)



//Rotas de Lista de Tarefa
router.post(
  "/create/list/task",
  autenticarToken,
  ListTaskController.createListTask
);


router.get("/select/list/task", autenticarToken, ListTaskController.listTask);

router.get("/select/all/task", autenticarToken, TaskController.listAllTask);



/*TODO: Falar com o front.
router.put("/update/task", autenticarToken, taskController.updateTask);
*/

export { router };
