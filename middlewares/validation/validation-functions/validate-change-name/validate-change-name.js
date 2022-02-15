import createError from 'http-errors';
import { changeNameSchema } from '../../validation-schemas';

export const validateChangeName = async (req, res, next) => {
  try {
    await changeNameSchema.validateAsync(req.body);
  } catch (error) {
    console.error(`Missing required fields: ${error.message}`);
    return next(createError(400, `Missing required fields: ${error.message}`));
  }

  next();
};
