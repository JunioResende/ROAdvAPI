import { inject, injectable } from 'tsyringe';

import { ICreatePostsDTO } from '@modules/posts/dtos/ICreatePostsDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  async execute({
    post_title,
    posting,
    userID,
  }: ICreatePostsDTO): Promise<void> {
    const postExists = await this.postsRepository.findByTitle(post_title);

    if (postExists) {
      throw new AppError('There is already a post with this title');
    }

    await this.postsRepository.create({
      post_title,
      posting,
      userID,
    });
  }
}

export { CreatePostUseCase };
