// !IMP Use userId as query parameter because this routes are protected & user field in related table is marked as "owner". e.g. {owner: userId}

export class AbstractRepository {
  #model;

  constructor(model) {
    this.#model = model;
  }

  async getAll(userId) {
    return await this.#model.find({ owner: userId });
  }

  async getById(id, userId) {
    return await this.#model.findOne({ _id: id, owner: userId });
  }

  async create(data, userId) {
    return await this.#model.create({ ...data, owner: userId });
  }

  async updateById(id, data, userId) {
    return await this.#model.findOneAndUpdate(
      { _id: id, owner: userId },
      { ...data },
    );
  }

  async deleteById(id, userId) {
    return await this.#model.findOneAndRemove({ _id: id, owner: userId });
  }
}
