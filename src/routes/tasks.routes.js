import { Router }from 'express';
import tasksController from '../controllers/tasks.controller.js';
import {authenticateToken} from '../middlewares/authenticate.middleware.js';

const router = Router();

router.route('/')
    .get(tasksController.getTasks)
    .post(tasksController.createTasks)
    

router.route('/:id')
    .get(tasksController.getTask)
    .put(tasksController.updateTask)
    .delete(tasksController.deleteTask)
    .patch(tasksController.taskDone)



 

export default router;