
import { AbstractRepository } from '../abstract-repository/abstract-repository';

export class TransactionRepository extends AbstractRepository {
  constructor(model) {
    super(model);
  }

  async getTransactionById(id) {
    const result = await this.model.findById(id)
    return result;
  }
  
  async addTransaction(body) {
    const result = await this.model.create(body)
    return result;
  }
  
  async removeTransaction(transactionId) {
    const result = await this.model.findOneAndRemove({_id: transactionId})
    return result
  }
}
