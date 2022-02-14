import { Router } from 'express';
import { transactionController } from '../../../controllers';
import { guard, validateAddTransaction } from '../../../middlewares/';

export const transactionRouter = new Router();

transactionRouter.post(
  '/',
  guard,
  validateAddTransaction,
  transactionController.addTransaction,
);
transactionRouter.get(
  '/:date',
  guard,
  transactionController.getTransactionByDay,
);

transactionRouter.delete(
  '/:transactionId',
  guard,
  transactionController.removeTransaction,
);
