import res from 'express/lib/response';
import createError from 'http-errors';
import { transactionService } from '../../services';

class StatisticController {
  async getExpenseLastSixMonth(req, res, next) {
    const { id } = res.locals.user;
    const data = await transactionService.getExpensesForSixMonth(id);
    return res.status(200).json({
      status: 'success',
      code: 200,
      data,
    });
  }

  async getIncomeLastSixMonth(req, res, next) {
    const { id } = res.locals.user;
    console.log(id);
    const data = await transactionService.getIncomesForSixMonth(id);
    return res.status(200).json({
      status: 'success',
      code: 200,
      data,
    });
  }
}

export default StatisticController;

//   - `/expenses` - GET - энд-поинт получения общей сводки по расходам за
//     последние 6 месяцев (на странице расходы/доходы) в виде РАСХОД: месяц -
//     сумма, месяц - сумма
