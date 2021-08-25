import { inject, injectable } from 'tsyringe';

import { IUpdatePostDTO } from '@modules/posts/dtos/IUpdatePostDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class UpdatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  async execute({ id, post_title, posting }: IUpdatePostDTO): Promise<void> {
    const postExists = await this.postsRepository.findByTitle(post_title);

    if (postExists) {
      throw new AppError('This posting already exists!');
    }

    await this.postsRepository.updatePost({ id, post_title, posting });
  }
}

export { UpdatePostUseCase };
