import createError from 'http-errors';
import { googleAuthService, userService, authService } from '../../services';

class GoogleAuthController {
  async googleAuth(req, res, next) {
    try {
      const code = req.query.code;
      console.log('code', code);
      if (!code) {
        return next(createError(401, 'Authorization code not provided!'));
      }
      const { id_token, access_token } =
        await googleAuthService.getGoogleUserToken(code);

      const { name, verified_email, email } =
        await googleAuthService.getGoogleUserInfo({
          id_token,
          access_token,
        });
      if (!verified_email) {
        return next(createError(403, 'Google account not verified'));
      }

      let user = await userService.findUserByEmail(email);
      if (!user) {
        const credentials = {
          name: name,
          email: email,
          isVerified: true,
        };
        user = await authService.signUpUser(credentials);
      }

      const token = authService.getToken(user);
      await authService.setToken(user.id, token);

      res.redirect(`${process.env.FRONTEND_URL}?token=${token}`);
    } catch (error) {
      console.log('Failed to authorize Google User', error);
    }
  }
}

export default GoogleAuthController;
