import createError from 'http-errors';
import { transactionService } from '../../services';

class TransactionController {
  async addTransaction(req, res, next) {
    const { id } = res.locals.user;
    const { date, description, category, amount, isExpense } = req.body;

    if (!date || !description || !category || !amount || !isExpense) {
      return next(createError(400, 'Add all required fields'));
    }

    if (!Number(amount)) {
      return next(createError(400, 'Amount should be a number'));
    }

    const transaction = {
      transactionDate: date,
      isExpense,
      description,
      transactionAmount: Number(amount),
      categoryId: category,
      owner: id,
    };

    const newTransaction = await transactionService.addTransaction(transaction);

    res.status(201).json({
      status: 'success',
      code: 201,
      message: newTransaction,
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
      .json({ status: 'success', code: 200, data: { transaction } });
  }

  // async getTransactionById(req, res, next) {
  //   const { id } = req.params;
  //   const transaction = await transactionRepository.getTransactionById(id);
  //   if (transaction) {
  //     return res
  //       .status(200)
  //       .json({ status: 'success', code: 200, data: { transaction } });
  //   }
  //   res.status(404).json({ status: 'error', code: 404, message: 'Not found' });
  // }
}

export default TransactionController;
