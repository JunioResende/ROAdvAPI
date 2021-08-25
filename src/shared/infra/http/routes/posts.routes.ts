import { Router } from 'express';

import { CreatePostController } from '@modules/posts/useCases/createPost/CreatePostController';
import { FindPostsController } from '@modules/posts/useCases/findPosts/FindPostsController';

import { ensureAuth } from '../middlewares/ensureAuth';
import { ensureUserAdmin } from '../middlewares/ensureUserAdmin';

const postsRoutes = Router();

const createPostController = new CreatePostController();

const findPostsController = new FindPostsController();

postsRoutes.post('/', ensureAuth, ensureUserAdmin, createPostController.handle);

postsRoutes.get(
  '/findPosts',
  ensureAuth,
  ensureUserAdmin,
  findPostsController.handle,
);

export { postsRoutes };
