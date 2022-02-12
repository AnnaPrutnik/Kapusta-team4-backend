import queryString from 'query-string';
import { googleAuthService, userService, authService } from '../../services';

class GoogleAuthController {
  async googleAuth(req, res) {
    const stringifiedParams = queryString.stringify({
      client_id: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: `${process.env.BASE_URL}/api/auth/google-redirect`,
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ].join(' '),
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent',
    });
    const uri = `${process.env.BASE_URL}/api/auth/google-redirect`;
    return res.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`,
    );
  }

  async googleRedirect(req, res) {
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const urlObj = new URL(fullUrl);
    const urlParams = queryString.parse(urlObj.search);
    const authCode = urlParams.code;
    const tokenData = await googleAuthService.getGoogleUserToken(authCode);
    const userData = await googleAuthService.getGoogleUserInfo(tokenData);

    let user = await userService.findUserByEmail(userData.email);
    if (!user) {
      const credentials = {
        name: userData.given_name,
        email: userData.email,
        isVerified: true,
      };
      user = await authService.signUpUser(credentials);
    }

    const token = authService.getToken(user);
    await authService.setToken(user.id, token);

    //TODO подумать как правильно вернуть на фронт данные юзера

    res.redirect(`${process.env.FRONTEND_URL}?token=${token}`);
  }
}

export default GoogleAuthController;
