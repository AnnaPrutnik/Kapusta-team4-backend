import axios from 'axios';

export class GoogleAuthService {
  repository;

  constructor(repository) {
    this.repository = repository;
  }

  async getGoogleUserToken(authCode) {
    const token = await axios({
      url: `https://oauth2.googleapis.com/token`,
      method: 'post',
      data: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
        grant_type: 'authorization_code',
        code: authCode,
      },
    });

    return token.data.access_token;
  }

  async getGoogleUserInfo(token) {
    const user = await axios({
      url: 'https://www.googleapis.com/oauth2/v2/userinfo',
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user.data;
  }
}
