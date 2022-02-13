import createError from 'http-errors';
import { userService } from '../../services';

class UserController {
  async getBalance(req, res, next) {
    const { id } = res.locals.user;
    const balance = await userService.getBalance(id);
    return res.status(200).json({
      status: 'success',
      code: 200,
      data: balance,
    });
  }

  async setBalance(req, res, next) {
    const { id } = res.locals.user;
    const value = Number(req.body.value);
    if (!value) {
      return next(createError(400, 'Balance should be a number'));
    }
    const balance = await userService.setBalance(id, Number(value));
    return res.status(200).json({
      status: 'success',
      code: 200,
      data: balance,
    });
  }
}

export default UserController;
