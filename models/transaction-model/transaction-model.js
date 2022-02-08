import mongoose from 'mongoose';

const { Schema, SchemaTypes, model } = mongoose;

const transactionSchema = new Schema(
  {
    balance: {
      type: Number,
      default: 0
    },
    categoryId: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
      enum: ["incomes", "expense"],
    },
    transactionDate: {
      day: {
        type: String,
        required: true
      },
      month: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      }
    }
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Transaction = model('transaction', transactionSchema);