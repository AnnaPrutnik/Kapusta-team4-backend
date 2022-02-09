import { Router } from 'express';
import { categoryController } from '../../../controllers/';

export const categoryRouter = new Router();

categoryRouter.get('/:type', categoryController.getCategories);
// categoryRouter.post('/', categoryController.createCategory);
