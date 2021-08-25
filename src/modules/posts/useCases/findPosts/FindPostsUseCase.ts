import { inject, injectable } from 'tsyringe';

import { Posts } from '@modules/posts/infra/typeorm/entities/Posts';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

interface IRequest {
  post_title: string;
}

@injectable()
class FindPostsUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  async execute({ post_title }: IRequest): Promise<Posts[]> {
    const posts = await this.postsRepository.findPosts(post_title);

    return posts;
  }
}

export { FindPostsUseCase };
