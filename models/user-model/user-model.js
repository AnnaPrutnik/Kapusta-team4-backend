import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      default: 'John',
    },
    lastName: {
      type: String,
      default: 'John',
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
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const User = model('user', userSchema);

export default User;
