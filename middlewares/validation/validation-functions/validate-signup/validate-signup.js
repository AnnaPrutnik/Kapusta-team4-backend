import createError from 'http-errors';
import { signUpSchema } from '../../validation-schemas';

export const validateSignUp = async (req, res, next) => {
  try {
    await signUpSchema.validateAsync(req.body);
  } catch (error) {
    console.error(`Missing required fields: ${error.message}`);
    return next(createError(400, `Missing required fields: ${error.message}`));
  }

  next();
};
