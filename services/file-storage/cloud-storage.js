import {v2 as cloudinary} from 'cloudinary';
import {promisify} from 'util';
import {unlink} from 'fs/promises';
import {userRepository} from '../../repositories';

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
  secure: true
});

class CloudStorage {
  constructor(file, user) {
    this.userId = user; //выдает ошибку (user.id)
    this.filePath = file.path;
    this.idAvatarCloud = user; //выдает ошибку (user.idAvatarCloud;)
    this.folderAvatar = 'Kapusta';
    this.uploadCloud = promisify(cloudinary.uploader.upload)
  }

  async save() {
    const {public_id: returnedIdAvatarCloud, secure_url: avatarUrl} = 
      await this.uploadCloud(this.filePath, {
        public_id: this.idAvatarCloud,
        folder: this.folderAvatar,
    })

    const newIdAvatarCloud = returnedIdAvatarCloud.replace(
      `${this.folderAvatar}/`,
      '',
    )
    
    await userRepository.updateAvatar(this.userId, avatarUrl, newIdAvatarCloud);

    await this.removeUploadFile(this.filePath)
    return avatarUrl;
  }

  async removeUploadFile(filePath) {
    try {
      await unlink(filePath)
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default CloudStorage;