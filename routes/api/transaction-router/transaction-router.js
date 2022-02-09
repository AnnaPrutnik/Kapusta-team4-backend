import { Router } from 'express';

export const transactionRouter = new Router();

transactionRouter.get('/balance', );
transactionRouter.post('/expense', addExpense);
transactionRouter.post('/income', addIncome);
transactionRouter.delete('/:transactionId', removeTransaction);
