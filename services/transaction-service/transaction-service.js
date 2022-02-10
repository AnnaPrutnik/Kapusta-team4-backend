// import {
//   transactionRepository, - repository
//   categoryRepository, -     thirdRepository;
//   userRepository, -secondRepository
// } from '../../repositories';

export class TransactionService {
  repository;
  secondRepository;
  thirdRepository;

  constructor(repository, secondRepository, thirdRepository) {
    this.repository = repository;
    this.secondRepository = secondRepository;
    this.thirdRepository = thirdRepository;
  }

  async addTransaction(transaction) {
    const isExpense = await this.thirdRepository.findCategoryType(
      transaction.categoryId,
    );

    const newTransaction = await this.repository.addTransaction({
      ...transaction,
      isExpense,
    });

    const balance = await this.secondRepository.getBalance(transaction.owner);
    console.log(transaction.owner);
    let newBalance = null;
    if (isExpense) {
      newBalance = await this.secondRepository.setBalance(
        transaction.owner,
        balance - transaction.transactionAmount,
      );
    } else {
      newBalance = await this.secondRepository.setBalance(
        transaction.owner,
        balance + transaction.transactionAmount,
      );
    }

    console.log('newBalance', newBalance);
    return { newTransaction, balance };
  }

  async removeTransaction(userId, transactionId) {
    const { transactionAmount, isExpense, owner } =
      await this.repository.getTransactionById(transactionId);

    const balance = await this.secondRepository.getBalance(owner);
    let newBalance = null;
    if (isExpense) {
      newBalance = await this.secondRepository.setBalance(
        userId,
        balance + transactionAmount,
      );
    } else {
      newBalance = await this.secondRepository.setBalance(
        userId,
        balance - transactionAmount,
      );
    }

    const transaction = await this.repository.deleteById(transactionId, userId);

    return { transaction, newBalance };
  }

  async getExpensesForSixMonth(userId) {
    const data = await this.repository.getTransactionForSixMonth(userId, true);
    return data;
  }

  async getIncomesForSixMonth(userId) {
    const data = await this.repository.getTransactionForSixMonth(userId, false);
    return data;
  }
}
