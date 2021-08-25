import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload/upload';
import { CreatePostController } from '@modules/posts/useCases/createPost/CreatePostController';
import { DeletePostController } from '@modules/posts/useCases/deletePost/DeletePostController';
import { FindImagesOfThePostsController } from '@modules/posts/useCases/findImagesOfThePosts/FindImagesOfThePostsController';
import { FindPostsController } from '@modules/posts/useCases/findPosts/FindPostsController';
import { ShowImageOfThePostController } from '@modules/posts/useCases/showImageOfThePost/ShowImageOfThePostController';
import { ShowPostController } from '@modules/posts/useCases/showPost/ShowPostController';
import { UpdatePostController } from '@modules/posts/useCases/updatePost/UpdatePostController';
import { UploadImagesOfThePostsController } from '@modules/posts/useCases/uploadImageOfThePosts/UploadImagesOfThePostsController';

import { ensureAuth } from '../middlewares/ensureAuth';
import { ensureUserAdmin } from '../middlewares/ensureUserAdmin';
import { ensureSuperUserAdmin } from '../middlewares/ensureUserSuperAdmin';

const postsRoutes = Router();

const uploadImagesOfThePosts = multer(
  uploadConfig.upload(`./tmp/imagesOfThePosts`),
);
// Create Posts
const createPostController = new CreatePostController();

// Find / Show Posts
const findPostsController = new FindPostsController();
const showPostController = new ShowPostController();

// Update Posts
const updatePostController = new UpdatePostController();

// Upload / Delete Images Of The Posts
const uploadImagesOfThePostsController = new UploadImagesOfThePostsController();

// Find / Show Image Of The Posts
const findImagesOfThePostsController = new FindImagesOfThePostsController();
const showImageOfThePostController = new ShowImageOfThePostController();

// Delete Post
const deletePostController = new DeletePostController();

// Routes
// Create Posts
postsRoutes.post('/', ensureAuth, ensureUserAdmin, createPostController.handle);

// Find / Show Posts
postsRoutes.get(
  '/findPosts',
  ensureAuth,
  ensureUserAdmin,
  findPostsController.handle,
);

postsRoutes.get('/showPost/:id', showPostController.handle);

// Update Posts
postsRoutes.put(
  '/updatePost/:id',
  ensureAuth,
  ensureUserAdmin,
  updatePostController.handle,
);

// Upload / Delete Images Of The Posts
postsRoutes.post(
  '/uploadImagesOfThePosts/:id',
  ensureAuth,
  ensureUserAdmin,
  uploadImagesOfThePosts.array('imageOfThePosts'),
  uploadImagesOfThePostsController.handle,
);

// Find / Show Image Of The Posts
postsRoutes.get(
  '/findImagesOfThePost/:id',
  findImagesOfThePostsController.handle,
);

postsRoutes.get(
  '/showImagesOfThePost/:id',
  showImageOfThePostController.handle,
);

// Delete Post
postsRoutes.delete(
  '/deletePost/:id',
  ensureAuth,
  ensureSuperUserAdmin,
  deletePostController.handle,
);

export { postsRoutes };
