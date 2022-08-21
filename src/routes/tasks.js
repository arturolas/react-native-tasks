import { Router } from 'express';
import {saveTask, deleteTask, getTask, getTaskCount, getTasks, updateTask} from '../controllers/tasks'

const router = Router()

/**
 * @swagger 
 * tags:
 *   name: Tasks
 *   description: Tasks endpoint
 */

/**
 *  @swagger
 *  /tasks:
 *  get:
 *   sumary: Get all tasks
 *   tags: [Tasks]
 */
router.get('/tasks', getTasks);

/**
 *  @swagger
 *  /tasks/count:
 *  get:
 *   sumary: Get tasks count
 *   tags: [Tasks]
 */
router.get('/tasks/count', getTaskCount);

/**
 *  @swagger
 *  /tasks:
 *  get:
 *   sumary: Get a tasks by id
 *   tags: [Tasks]
 */
router.get('/tasks/:id', getTask);

/**
 *  @swagger
 *  /tasks:
 *  post:
 *   sumary: Save a new tasks
 *   tags: [Tasks]
 */
router.post('/tasks/', saveTask);

/**
 *  @swagger
 *  /tasks:
 *  delete:
 *   sumary: Delete a tasks by id
 *   tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask);

/**
 *  @swagger
 *  /tasks:
 *  put:
 *   sumary: Update a tasks by id
 *   tags: [Tasks]
 */
router.put('/tasks/:id', updateTask);


export default router