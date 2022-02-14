import createError from 'http-errors';
import { addTransactionSchema } from '../../validation-schemas';

export const validateAddTransaction = async (req, res, next) => {
  try {
    await addTransactionSchema.validateAsync(req.body);
  } catch (error) {
    console.error(`Missing required fields: ${error.message}`);
    return next(createError(400, `Missing required fields: ${error.message}`));
  }

  next();
};
