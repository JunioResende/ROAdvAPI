import { Router } from 'express';

import { CreatePostController } from '@modules/posts/useCases/createPost/CreatePostController';

import { ensureAuth } from '../middlewares/ensureAuth';
import { ensureUserAdmin } from '../middlewares/ensureUserAdmin';

const postsRoutes = Router();

const createPostController = new CreatePostController();

postsRoutes.post('/', ensureAuth, ensureUserAdmin, createPostController.handle);

export { postsRoutes };
