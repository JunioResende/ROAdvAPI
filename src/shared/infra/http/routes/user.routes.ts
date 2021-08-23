import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload/upload';
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { UploadUserAvatarController } from '@modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarController';

import { ensureAuth } from '../middlewares/ensureAuth';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();

const uploadUserAvatarController = new UploadUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuth,
  uploadAvatar.single('avatar'),
  uploadUserAvatarController.handle,
);

export { usersRoutes };
