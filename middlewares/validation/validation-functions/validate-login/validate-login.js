import createError from 'http-errors';
import { logInSchema } from '../../validation-schemas';

export const validateLogIn = async (req, res, next) => {
  try {
    await logInSchema.validateAsync(req.body);
  } catch (error) {
    console.error(`Missing required fields: ${error.message}`);
    return next(createError(400, `Missing required fields: ${error.message}`));
  }

  next();
};
