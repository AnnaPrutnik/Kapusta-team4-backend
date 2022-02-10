import { transactionRepository, categoryRepository } from '../../repositories';

export class TransactionService {
  repository;

  constructor(repository) {
    this.repository = repository;
  }

  async addTransaction(transaction) {
    const newTransaction = await transactionRepository.addTransaction(
      transaction,
    );
    return newTransaction;
  }

  async removeTransaction(userId, transactionId) {
    const transaction = await transactionRepository.removeTransaction(
      userId,
      transactionId,
    );
    return transaction;
  }
}
