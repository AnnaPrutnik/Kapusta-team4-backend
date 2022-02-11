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
    const data = await transactionService.getIncomesForSixMonth(id);
    return res.status(200).json({
      status: 'success',
      code: 200,
      data,
    });
  }

  async getIncomesByMonth(req, res, next) {
    const { id } = res.locals.user;
    const { month } = req.params;
    const data = await transactionService.getStatsByMonth(id, month, false);
    return res.status(200).json({
      status: 'success',
      code: 200,
      data,
    });
  }

  async getExpensesByMonth(req, res, next) {
    const { id } = res.locals.user;
    const { month } = req.params;
    const data = await transactionService.getStatsByMonth(id, month, true);
    return res.status(200).json({
      status: 'success',
      code: 200,
      data,
    });
  }

  async getStatsByCategory(req, res, next) {
    const { id } = res.locals.user;
    const { month } = req.params;
    const { categoryId } = req.body;
    const data = await transactionService.getStatsByCategory(
      id,
      month,
      categoryId,
    );
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
