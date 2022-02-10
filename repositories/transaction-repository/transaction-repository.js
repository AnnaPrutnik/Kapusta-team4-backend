import { AbstractRepository } from '../abstract-repository/abstract-repository';
import mongoose from 'mongoose';
import moment from 'moment';

const { Types } = mongoose;

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

  async getTransactionForSixMonth(ownerId, isExpense) {
    // console.log('ownerId', ownerId);
    // console.log('isExpense', isExpense);
    const dateFrom = new Date(
      moment().subtract(6, 'month').startOf('month').toISOString(),
    );

    const transactions = await this.model.find({
      owner: ownerId,
      isExpense,
      transactionDate: {
        $gte: dateFrom,
      },
    });

    console.log(transactions.length);

    // const data = await this.model.aggregate([
    //   { $match: { owner: Types.ObjectId(id) } },
    //   {
    //     $group: { _id: 'month', total: { $sum: '$transactionAmount' } },
    //   },
    // ]);
    return transactions;
  }
  async getTransactionForOneDay() {}
}
