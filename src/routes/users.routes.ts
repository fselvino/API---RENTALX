import { UpdateUserAvatarController } from '@modules/accounts/updateUserAvatar/UpdateUserAvatarController';
import { CreateUserController } from '@modules/accounts/useCases/authenticateUser/createUser/CreateUserController';
import { Router } from 'express';
import { ensureAuthenticated } from 'middlewares/ensureAuthenticated';
import multer from 'multer';

import uploadConfig from '../config/upload';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoutes };
