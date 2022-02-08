import jwt from 'jsonwebtoken';

const JWT_KEY = process.env.JWT_SECRET_KEY;
export class AuthService {
  repository;

  constructor(repository) {
    this.repository = repository;
  }

  async signUpUser(credentials) {
    try {
      const { firstName, lastName, email, verifyToken } =
        await this.repository.createNewUser(credentials);
      return { firstName, lastName, email, verifyToken };
    } catch (error) {
      console.error(`Error on creating new User: ${error.message}`);
    }
  }

  async getToken(user) {
    const { id, email } = user;
    const token = jwt.sign({ id, email }, JWT_KEY, { expiresIn: '8h' });
    console.log(token);
    return token;
  }

  async setToken() {}
}
