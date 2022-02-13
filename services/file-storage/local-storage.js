import path from 'path';
import fs from 'fs/promises';
import {userRepository} from '../../repositories';

class LocalStorage {
  constructor(file, user) {
    this.userId = user.id;
    this.filename = file.filename;
    this.filePath = file.path;
    this.folderAvatar = process.env.FOLDER_FOR_AVATARS;
  }

  async save() {
    const destination = path.join(this.folderAvatar, this.userId);
    await fs.mkdir(destination, {recursive: true});
    await fs.rename(this.filePath, path.join(destination, this.filename));
    const avatarUrl = path.normalize(path.join(this.userId, this.filename));
    await userRepository.updateAvatar(this.userId, avatarUrl);
    return avatarUrl;
  }
}

export default LocalStorage;