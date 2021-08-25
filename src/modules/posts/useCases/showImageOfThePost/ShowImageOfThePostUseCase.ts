import { inject, injectable } from 'tsyringe';

import { ImagesOfThePosts } from '@modules/posts/infra/typeorm/entities/ImagesOfThePosts';
import { IImagesOfThePostsRepository } from '@modules/posts/repositories/IImagesOfThePostsRepository';

interface IRequest {
  imageID: string;
}

@injectable()
class ShowImageOfThePostUseCase {
  constructor(
    @inject('ImagesOfThePostsRepository')
    private imagesOfThePostsRepository: IImagesOfThePostsRepository,
  ) {}

  async execute({ imageID }: IRequest): Promise<ImagesOfThePosts> {
    const imageOfThePost = await this.imagesOfThePostsRepository.findById(
      imageID,
    );

    return imageOfThePost;
  }
}

export { ShowImageOfThePostUseCase };
