import {getTransactionById, addTransaction, removeTransaction} from '../../repositories/transaction-repository/transaction-repository';

class TransactionController {
  async getTransactionById(req, res, next) {
    const { id } = req.params;
    const transaction = await getTransactionById(id);
    if (transaction) {
      return res
        .status(200)
        .json({ status: 'success', code: 200, data: { transaction } });
    }
    res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not found' });
  }

  async addTransaction(req, res, next) {
    const newTransaction = await addTransaction(req.body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: { newTransaction },
    })
  }

  async removeTransaction(req, res, next) {
    const { transactionId } = req.params;
    const transaction = await removeTransaction(transactionId);
    if (transaction) {
      return res
        .status(200)
        .json({ status: 'success', code: 200, data: { transaction } });
    }
    res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not found' });
  }
}

export default TransactionController;
