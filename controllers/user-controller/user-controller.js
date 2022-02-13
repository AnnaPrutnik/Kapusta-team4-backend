import createError from 'http-errors';
import { userService } from '../../services';
import {  
  UploadFileService,
  CloudFileStorage
} from '../../services/file-storage';

class UserController {
  async getBalance(req, res, next) {
    const { id } = res.locals.user;
    const balance = await userService.getBalance(id);
    return res.status(200).json({
      status: 'success',
      code: 200,
      data: balance,
    });
  }

  async setBalance(req, res, next) {
    const { id } = res.locals.user;
    const value = Number(req.body.value);
    if (!value) {
      return next(createError(400, 'Balance should be a number'));
    }
    const balance = await userService.setBalance(id, Number(value));
    return res.status(200).json({
      status: 'success',
      code: 200,
      data: balance,
    });
  }

  async uploadAvatar(req, res, next) {
    const user = res.locals.user
    const uploadService = new UploadFileService(
      CloudFileStorage,
      req.file,
      // req.user,
      user
    )
    const avatarUrl = await uploadService.updateAvatar();
  
    res
      .status(200)
      .json({ status: 'success', code: 200, data: {avatarUrl} });
  }
}

export default UserController;
