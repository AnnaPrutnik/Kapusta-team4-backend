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

  async updateToken(id, token) {
    return await this.model.updateOne({ _id: id }, { token });
  }
}
