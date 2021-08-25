import { inject, injectable } from 'tsyringe';

import { Posts } from '@modules/posts/infra/typeorm/entities/Posts';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  postID: string;
}

@injectable()
class ShowPostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  async execute({ postID }: IRequest): Promise<Posts> {
    const post = await this.postsRepository.findById(postID);

    if (!post) {
      throw new AppError('This posting not found');
    }

    return post;
  }
}

export { ShowPostUseCase };
