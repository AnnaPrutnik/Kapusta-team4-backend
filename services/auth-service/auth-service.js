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
}
