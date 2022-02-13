import Joi from 'joi';

export const setBalanceSchema = Joi.object({
  value: Joi.string().required(),
});
