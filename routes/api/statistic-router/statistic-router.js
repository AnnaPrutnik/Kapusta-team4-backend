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
