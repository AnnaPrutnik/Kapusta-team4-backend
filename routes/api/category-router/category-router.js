import { Router } from 'express';
import { categoryController } from '../../../controllers/';
import { guard } from '../../../middlewares/';

export const categoryRouter = new Router();

categoryRouter.get('/:type', guard, categoryController.getCategories);
// categoryRouter.post('/', categoryController.createCategory);
