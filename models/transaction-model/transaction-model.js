import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const transactionSchema = new Schema(
  {
    transactionDate: {
      type: String,
      required: [true, 'Transaction Date is required'],
    },
    isExpense: {
      type: Boolean,
      required: [
        true,
        "It's necessary to specify, whether its income or expense",
      ],
    },
    description: {
      type: String,
      default: null,
    },
    transactionAmount: {
      type: Number,
      required: [true, 'Transaction Amount is required'],
    },
    categoryId: {
      type: Number,
      required: [true, 'Category Id is required'],
    },
    categoryName: {
      type: String,
      required: [true, 'Category Name is required'],
    },
  },
  {
    versionKey: false,
    timeStamps: true,
  },
);

export const Transaction = model('transaction', transactionSchema);