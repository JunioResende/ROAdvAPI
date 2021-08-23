import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload/upload';
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { DeleteUserAvatarController } from '@modules/accounts/useCases/deleteUserAvatar/DeleteUserAvatarController';
import { FindUserController } from '@modules/accounts/useCases/findUser/FindUserController';
import { UploadUserAvatarController } from '@modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarController';

import { ensureAuth } from '../middlewares/ensureAuth';
import { ensureSuperUserAdmin } from '../middlewares/ensureUserSuperAdmin';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

// Create User
const createUserController = new CreateUserController();

// Upload and Delete Avatar
const uploadUserAvatarController = new UploadUserAvatarController();
const deleteUserAvatarController = new DeleteUserAvatarController();

// Find / List / Show User Profile
const findUserController = new FindUserController();

// Routes

// Create User
usersRoutes.post('/', createUserController.handle);

// Upload and Delete Avatar
usersRoutes.patch(
  '/avatar',
  ensureAuth,
  uploadAvatar.single('avatar'),
  uploadUserAvatarController.handle,
);

usersRoutes.delete(
  '/deleteUserAvatar',
  ensureAuth,
  deleteUserAvatarController.handle,
);

usersRoutes.get(
  '/findUser',
  ensureAuth,
  ensureSuperUserAdmin,
  findUserController.handle,
);

export { usersRoutes };
