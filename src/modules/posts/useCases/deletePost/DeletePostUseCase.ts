import { inject, injectable } from 'tsyringe';

import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeletePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    await this.postsRepository.deletePost(id);
  }
}

export { DeletePostUseCase };
