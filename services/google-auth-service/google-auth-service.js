import axios from 'axios';
import queryString from 'query-string';

export class GoogleAuthService {
  repository;

  constructor(repository) {
    this.repository = repository;
  }

  async getGoogleUserToken(authCode) {
    const rootURl = 'https://oauth2.googleapis.com/token';

    const options = queryString.stringify({
      code: authCode,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL,
      grant_type: 'authorization_code',
    });

    try {
      const { data } = await axios.post(rootURl, options, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      return data;
    } catch (error) {
      console.log('Failed to fetch Google Oauth Tokens');
      throw new Error(error);
    }
  }

  async getGoogleUserInfo({ id_token, access_token }) {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
        {
          headers: {
            Authorization: `Bearer ${id_token}`,
          },
        },
      );

      return data;
    } catch (error) {
      console.log(err);
      throw Error(err);
    }
  }
}
