import { Router } from 'express';
import {transactionController} from '../../../controllers';
export const transactionRouter = new Router();

transactionRouter.get('/balance', );
transactionRouter.get('/:id', transactionController.getTransactionById);
transactionRouter.post('/expense', transactionController.addTransaction);
transactionRouter.post('/income', transactionController.addTransaction);
transactionRouter.delete('/:transactionId', transactionController.removeTransaction);
