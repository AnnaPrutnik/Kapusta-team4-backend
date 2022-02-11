import { Router } from 'express';
import { transactionController } from '../../../controllers';
import { guard } from '../../../middlewares/';

export const transactionRouter = new Router();

transactionRouter.post('/', guard, transactionController.addTransaction);
transactionRouter.get('/', guard, transactionController.getTransactionByDay);

transactionRouter.delete(
  '/:transactionId',
  guard,
  transactionController.removeTransaction,
);
