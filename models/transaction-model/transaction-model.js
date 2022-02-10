import mongoose from 'mongoose';

const { Schema, SchemaTypes, model } = mongoose;

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
      type: SchemaTypes.ObjectId,
      ref: 'category',
      required: true,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timeStamps: true,
  },
);

export const Transaction = model('transaction', transactionSchema);
