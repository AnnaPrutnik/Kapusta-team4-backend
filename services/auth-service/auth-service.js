import jwt from 'jsonwebtoken';

const JWT_KEY = process.env.JWT_SECRET_KEY;
export class AuthService {
  repository;

  constructor(repository) {
    this.repository = repository;
  }

  async signUpUser(credentials) {
    try {
      const { id, name, email, avatar } = await this.repository.createNewUser(
        credentials,
      );
      return { id, name, email, avatar };
    } catch (error) {
      console.error(`Error on creating new User: ${error.message}`);
      return null;
    }
  }

  getToken(user) {
    const { id, email } = user;
    const token = jwt.sign({ id, email }, JWT_KEY, { expiresIn: '8h' });
    return token;
  }

  async setToken(id, token) {
    try {
      await this.repository.updateToken(id, token);
    } catch (error) {
      console.error(`Error on updating token: ${error.message}`);
      return null;
    }
  }

  async isTokenValid(token) {
    try {
      const decodedToken = jwt.verify(token, JWT_KEY);
      if (decodedToken) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Error on checking token: ${error.message}`);
      return null;
    }
  }
}
