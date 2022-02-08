import { userService, authService } from '../../services';
import createError from 'http-errors';
class AuthController {
  async signUpUser(req, res, next) {
    const { email } = req.body;
    const user = await userService.findUserByEmail(email);
    if (user) {
      return next(createError(409, 'Email in Use'));
    }

    const userName = email.split('@')[0];
    const reqData = { name: userName, ...req.body };
    const userData = await authService.signUpUser(reqData);

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

  async logInUser(req, res, next) {
    const { email, password } = req.body;
    const user = await userService.isUserValid(email, password);

    if (!user) {
      return next(createError(401, 'Bad Credentials'));
    }

    const token = authService.getToken(user);
    await authService.setToken(user.id, token);

    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        token,
        email: user.email,
      },
    });
  }

  async logOutUser(req, res, next) {
    await authService.setToken(user.id, null);

    res.status(204).json({
      status: 'success',
      code: 204,
    });
  }
}

export default AuthController;
