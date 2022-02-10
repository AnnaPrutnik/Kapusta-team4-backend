import { Router } from 'express';
import { transactionController } from '../../../controllers';
import { guard } from '../../../middlewares/';

export const transactionRouter = new Router();

transactionRouter.post('/', guard, transactionController.addTransaction);
// transactionRouter.get(
//   '/income',
//   guard,
//   transactionController.getTransactionById,
// );
// transactionRouter.get(
//   '/expense',
//   guard,
//   transactionController.getTransactionById,
// );

transactionRouter.delete(
  '/:transactionId',
  guard,
  transactionController.removeTransaction,
);

// - `/` POST - энд-поинт добавления транзакции, обязательно указать поле
//   isExpense
// - `/income` - GET - энд-поинт получения списка доходов на текущую дату/или за
//   текущий месяц, если не будет реализовывать календарь (на дату, которая
//   указана в календаре)
// - `/expense` GET - энд-поинт получения скиска расходов на текущую дату/или за
//   текущий месяц, если не будет реализовывать календарь (на дату, которая
//   указана в календару )
// - `/:transactionId` - DELETE - энд-поинт удаления транзакции по id
