import pkg from 'mongoose';
import createError from 'http-errors';
const { Types } = pkg;
export const validateId = async (req, res, next) => {
  if (!Types.ObjectId.isValid(req.params.transactionId)) {
    return next(createError(400, `Invalid ObjectId`));
  }

  next();
};
