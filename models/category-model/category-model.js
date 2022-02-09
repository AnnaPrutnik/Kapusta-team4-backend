import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const categoryModel = new Schema(
  {
    category: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Add category name'],
    },
    isExpense: {
      type: Boolean,
      required: [true, 'Choose type of category'],
    },
  },
  { versionKey: false, timestamps: true },
);

export const Category = model('category', categoryModel);
