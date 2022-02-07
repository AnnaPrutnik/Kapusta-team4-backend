import { userService, authService } from '../../services';
import createError from 'http-errors';
class AuthController {
  async signUpUser(req, res, next) {
    // example error handling
    return next(createError(401, 'Custom Error in Controller'));
  }

  async logInUser(req, res, next) {}

  async logOutUser(req, res, next) {}
}

export default AuthController;
