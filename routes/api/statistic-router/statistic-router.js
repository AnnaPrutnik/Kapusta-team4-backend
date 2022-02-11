import { Router } from 'express';
import { guard } from '../../../middlewares';
import { statisticController } from '../../../controllers';

export const statisticRouter = new Router();

statisticRouter.get(
  '/expenses',
  guard,
  statisticController.getExpenseLastSixMonth,
);
statisticRouter.get(
  '/incomes',
  guard,
  statisticController.getIncomeLastSixMonth,
);
statisticRouter.get(
  '/expenses/:month',
  guard,
  statisticController.getExpensesByMonth,
);

statisticRouter.get(
  '/incomes/:month',
  guard,
  statisticController.getIncomesByMonth,
);

statisticRouter.get(
  '/categories/:month',
  guard,
  statisticController.getStatsByCategory,
);

// - `api/statistics`
//   - `/expenses` - GET - энд-поинт получения общей сводки по расходам за
//     последние 6 месяцев (на странице расходы/доходы) в виде РАСХОД: месяц -
//     сумма, месяц - сумма
//   - `/incomes` - GET - энд-поинт получения общей сводки по доходам за последние
//     6 месяцев (на странице расходы/доходы) в виде ДОХОД: месяц - сумма, месяц -
//     сумма
//   - `/expenses/:month` - GET энд-поинт получения подробной информации за месяц
//     => для фронта нужна такая инфа: Доход - все за месяц, Расход - всего за
//     месяц, список расходных категорий, по которым были транзакции (с нулевыми
//     транзакциями не показывать),
//   - `/incomes/:month` - GET энд-поинт получения подробной информации за месяц =>
//     для фронта нужна такая инфа: Доход - все за месяц, Расход - всего за месяц,
//     список доходных категорий , по которым были транзакции (с нулевыми
//     транзакциями не показывать),
//   - `/:month/:categoryId` - GET энд-поинт получения информации в разрезе
//     discription по конкретной категории за конкретный месяц
