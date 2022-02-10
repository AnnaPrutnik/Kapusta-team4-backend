import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import { authService, userService } from '../../services';

export const guard = async (req, res, next) => {
  const token = req.get('Authorization')?.split(' ')[1];
  const isValid = authService.isTokenValid(token);

  if (!token || !isValid) {
    return next(createError(401, 'Unauthorized'));
  }

  const payload = jwt.decode(token);
  const user = await userService.findUserById(payload.id);

  if (!user || user.token !== token) {
    return next(createError(401, 'Unauthorized'));
  }

  res.locals.user = user;

  next();
};
