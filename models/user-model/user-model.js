import mongoose from 'mongoose';
import { randomUUID } from 'crypto';

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      default: 'John',
    },
    lastName: {
      type: String,
      default: 'McClane',
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate(value) {
        const re =
          /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return re.test(String(value).trim().toLowerCase());
      },
    },
    password: {
      type: String,
    },
    verifyToken: {
      type: String,
      default: randomUUID,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: null,
    },
    isFirstLogin: {
      type: Boolean,
      default: true,
    },
    balance: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const User = model('user', userSchema);
