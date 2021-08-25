import { inject, injectable } from 'tsyringe';

import { ImagesOfThePosts } from '@modules/posts/infra/typeorm/entities/ImagesOfThePosts';
import { IImagesOfThePostsRepository } from '@modules/posts/repositories/IImagesOfThePostsRepository';

interface IRequest {
  post_id: string;
}

@injectable()
class FindImagesOfThePostsUseCase {
  constructor(
    @inject('ImagesOfThePostsRepository')
    private imagesOfThePostsRepository: IImagesOfThePostsRepository,
  ) {}

  async execute({ post_id }: IRequest): Promise<ImagesOfThePosts[]> {
    const ImagesOfThePosts = await this.imagesOfThePostsRepository.findByPostId(
      post_id,
    );

    return ImagesOfThePosts;
  }
}

export { FindImagesOfThePostsUseCase };
