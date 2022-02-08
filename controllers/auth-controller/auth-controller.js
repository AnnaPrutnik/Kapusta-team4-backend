import { userService, authService } from '../../services';
import createError from 'http-errors';
class AuthController {
  async signUpUser(req, res, next) {
    const { email } = req.body;
    const user = await userService.findUserByEmail(email);
    if (user) {
      return next(createError(409, 'Email in Use'));
    }

    const userData = await authService.signUpUser(req.body);

    if (!userData) {
      return next(createError());
    }

    // TODO add mailer service
    return res.status(201).json({
      status: 'success',
      code: 201,
      data: userData,
    });
  }

  async logInUser(req, res, next) {}

  async logOutUser(req, res, next) {}
}

export default AuthController;
