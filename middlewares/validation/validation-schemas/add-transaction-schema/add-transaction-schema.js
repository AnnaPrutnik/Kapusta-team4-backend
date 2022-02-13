import Joi from 'joi';

export const addTransactionSchema = Joi.object({
  date: Joi.string().required(),
  description: Joi.string().required(),
  categoryId: Joi.string().required(),
  amount: Joi.string().required(),
});
