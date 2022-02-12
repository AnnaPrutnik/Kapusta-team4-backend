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

  async getTransactionForSixMonth(ownerId, type) {
    const dateFrom = new Date(moment().subtract(5, 'month').startOf('month'));

    const transactions = await this.model.aggregate([
      {
        $match: {
          transactionDate: {
            $gt: dateFrom,
          },
          isExpense: type,
          owner: Types.ObjectId(ownerId),
        },
      },
      {
        $group: {
          _id: {
            month: {
              $month: '$transactionDate',
            },
          },
          totalAnount: {
            $sum: '$transactionAmount',
          },
        },
      },
      {
        $project: {
          month: '$_id.month',
          totalAnount: 1,
          _id: 0,
        },
      },
    ]);

    return transactions;
  }

  async getTransactionForOneDay(ownerId, date) {
    const dateFrom = new Date(moment(date).startOf('day'));
    const dateTo = new Date(moment(date).endOf('day'));
    console.log(object);
    const transactions = await this.model.find({
      owner: ownerId,
      transactionDate: {
        $gte: dateFrom,
        $lte: dateTo,
      },
    });

    return transactions;
  }

  async getCategoryByMonth(userId, month, isExpense) {
    const monthFrom = new Date(moment(month).startOf('month'));
    const monthTo = new Date(moment(month).endOf('month'));

    const categories = await this.model.aggregate([
      {
        $match: {
          transactionDate: {
            $gte: monthFrom,
            $lte: monthTo,
          },
          isExpense: isExpense,
          owner: Types.ObjectId(userId),
        },
      },
      {
        $group: {
          _id: '$categoryId',
          sum: {
            $sum: '$transactionAmount',
          },
        },
      },
      {
        $project: {
          categoryId: '$_id',
          sum: 1,
          _id: 0,
        },
      },
    ]);

    return categories;
  }

  async getTotalAmountByMonth(userId, month) {
    const monthFrom = new Date(moment(month).startOf('month'));
    const monthTo = new Date(moment(month).endOf('month'));
    const totalAmounts = await this.model.aggregate([
      {
        $match: {
          transactionDate: {
            $gte: monthFrom,
            $lte: monthTo,
          },
          owner: Types.ObjectId(userId),
        },
      },
      {
        $group: {
          _id: '$isExpense',
          total: {
            $sum: '$transactionAmount',
          },
        },
      },
      {
        $project: {
          isExpense: '$_id',
          total: 1,
          _id: 0,
        },
      },
    ]);
    return totalAmounts;
  }

  async getStatsByCategory(userId, month, categoryId) {
    const monthFrom = new Date(moment(month).startOf('month'));
    const monthTo = new Date(moment(month).endOf('month'));
    const categories = await this.model.aggregate([
      {
        $match: {
          transactionDate: {
            $gte: monthFrom,
            $lte: monthTo,
          },
          owner: Types.ObjectId(userId),
          categoryId: Types.ObjectId(categoryId),
        },
      },
      {
        $group: {
          _id: '$description',
          total: {
            $sum: '$transactionAmount',
          },
        },
      },
      {
        $project: {
          description: '$_id',
          total: 1,
          _id: 0,
        },
      },
    ]);
    return categories;
  }
}
