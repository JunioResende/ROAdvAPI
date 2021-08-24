import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload/upload';
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { DeleteUserAvatarController } from '@modules/accounts/useCases/deleteUserAvatar/DeleteUserAvatarController';
import { FindUserController } from '@modules/accounts/useCases/findUser/FindUserController';
import { ListUserController } from '@modules/accounts/useCases/listUser/ListUserController';
import { ShowUserProfileController } from '@modules/accounts/useCases/showUserProfile/ShowUserProfileController';
import { TurnNotSuperUserAdminController } from '@modules/accounts/useCases/turnNotSuperUserAdmin/TurnNotSuperUserAdminController';
import { TurnSuperUserAdminController } from '@modules/accounts/useCases/turnSuperUserAdmin/TurnSuperUserAdminController';
import { TurnUserAdminController } from '@modules/accounts/useCases/turnUserAdmin/TurnUserAdminController';
import { TurnUserNotAdminController } from '@modules/accounts/useCases/turnUserNotAdmin/TurnUserNotAdminController';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';
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
const listUserController = new ListUserController();
const showUserProfileController = new ShowUserProfileController();

// Update User
const updateUserController = new UpdateUserController();

// Permissions
const turnUserAdminController = new TurnUserAdminController();
const turnUserNotAdminController = new TurnUserNotAdminController();
const turnSuperUserAdminController = new TurnSuperUserAdminController();
const turnNotSuperUserAdminController = new TurnNotSuperUserAdminController();

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

// Find / List / Show User Profile
usersRoutes.get(
  '/findUser',
  ensureAuth,
  ensureSuperUserAdmin,
  findUserController.handle,
);

usersRoutes.get(
  '/listUser/:id',
  ensureAuth,
  ensureSuperUserAdmin,
  listUserController.handle,
);

usersRoutes.get(
  '/showUserProfile',
  ensureAuth,
  showUserProfileController.handle,
);

// Update User
usersRoutes.put('/updateUser', ensureAuth, updateUserController.handle);

// Permissions
usersRoutes.patch(
  '/turnUserAdmin/:id',
  ensureAuth,
  ensureSuperUserAdmin,
  turnUserAdminController.handle,
);

usersRoutes.patch(
  '/turnUserNotAdmin/:id',
  ensureAuth,
  ensureSuperUserAdmin,
  turnUserNotAdminController.handle,
);

usersRoutes.patch(
  '/turnSuperUserAdmin/:id',
  ensureAuth,
  ensureSuperUserAdmin,
  turnSuperUserAdminController.handle,
);

usersRoutes.patch(
  '/turnNotSuperUserAdmin/:id',
  ensureAuth,
  ensureSuperUserAdmin,
  turnNotSuperUserAdminController.handle,
);

export { usersRoutes };
