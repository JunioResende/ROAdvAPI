import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ImagesOfThePostsRepository } from '@modules/posts/infra/typeorm/repositories/ImagesOfThePostsRepository';
import { PostsRepository } from '@modules/posts/infra/typeorm/repositories/PostsRepository';
import { IImagesOfThePostsRepository } from '@modules/posts/repositories/IImagesOfThePostsRepository';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository,
);

container.registerSingleton<IImagesOfThePostsRepository>(
  'ImagesOfThePostsRepository',
  ImagesOfThePostsRepository,
);
