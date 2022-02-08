import { AbstractRepository } from '../abstract-repository/abstract-repository';

export class UserRepository extends AbstractRepository {
  constructor(model) {
    super(model);
  }

  async findUserByEmail(email) {
    return await this.model.findOne({ email });
  }

  async createNewUser(data) {
    return await this.model(data).save();
  }
}
