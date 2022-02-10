import { AbstractRepository } from '../abstract-repository/abstract-repository';

export class TransactionRepository extends AbstractRepository {
  constructor(model) {
    super(model);
  }

  async addTransaction(body) {
    const result = await this.model.create(body);
    return result;
  }

  async getTransactionById(userId) {
    const result = await this.model.findById(userId);
    return result;
  }

  async removeTransaction(ownerId, transactionId) {
    const result = await this.model.findOneAndRemove({
      _id: transactionId,
      ownerId,
    });
    return result;
  }

  async getTransactionForOneDay() {}
}
