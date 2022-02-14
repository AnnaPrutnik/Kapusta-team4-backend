import createError from 'http-errors';
import { setBalanceSchema } from '../../validation-schemas';

export const validateSetBalance = async (req, res, next) => {
  try {
    await setBalanceSchema.validateAsync(req.body);
  } catch (error) {
    console.error(`Missing required fields: ${error.message}`);
    return next(createError(400, `Missing required fields: ${error.message}`));
  }

  next();
};
