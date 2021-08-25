import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload/upload';
import { CreatePostController } from '@modules/posts/useCases/createPost/CreatePostController';
import { FindPostsController } from '@modules/posts/useCases/findPosts/FindPostsController';
import { UploadImagesOfThePostsController } from '@modules/posts/useCases/uploadImageOfThePosts/UploadImagesOfThePostsController';

import { ensureAuth } from '../middlewares/ensureAuth';
import { ensureUserAdmin } from '../middlewares/ensureUserAdmin';

const postsRoutes = Router();

const uploadImagesOfThePosts = multer(
  uploadConfig.upload(`./tmp/imagesOfThePosts`),
);

const createPostController = new CreatePostController();

const findPostsController = new FindPostsController();

const uploadImagesOfThePostsController = new UploadImagesOfThePostsController();

postsRoutes.post('/', ensureAuth, ensureUserAdmin, createPostController.handle);

postsRoutes.get(
  '/findPosts',
  ensureAuth,
  ensureUserAdmin,
  findPostsController.handle,
);

postsRoutes.post(
  '/uploadImagesOfThePosts/:id',
  ensureAuth,
  ensureUserAdmin,
  uploadImagesOfThePosts.array('imageOfThePosts'),
  uploadImagesOfThePostsController.handle,
);

export { postsRoutes };
