import createError from 'http-errors';
import moment from 'moment';
import { transactionService } from '../../services';

class TransactionController {
  async addTransaction(req, res, next) {
    const { id } = res.locals.user;
    const { date, description, categoryId, amount } = req.body;

    if (!date || !description || !categoryId || !amount) {
      return next(createError(400, 'Add all required fields'));
    }

    if (!Number(amount)) {
      return next(createError(400, 'Amount should be a number'));
    }

    const transaction = {
      transactionDate: date,
      description,
      transactionAmount: Number(amount),
      categoryId,
      owner: id,
    };

    const newTransaction = await transactionService.addTransaction(transaction);

    res.status(201).json({
      status: 'success',
      code: 201,
      data: newTransaction,
    });
  }

  async removeTransaction(req, res, next) {
    const { transactionId } = req.params;
    const { id } = res.locals.user;
    const transaction = await transactionService.removeTransaction(
      id,
      transactionId,
    );

    return res
      .status(200)
      .json({ status: 'success', code: 200, data: transaction });
  }

  async getTransactionByDay(req, res, next) {
    const { id } = res.locals.user;
    const { date } = req.params;
    const transactions = await transactionService.getTransactionByDay(id, date);
    return res
      .status(200)
      .json({ status: 'success', code: 200, data: transactions });
  }
}

export default TransactionController;
