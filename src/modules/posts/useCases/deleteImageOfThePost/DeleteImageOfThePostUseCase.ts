import { inject, injectable } from 'tsyringe';

import { IImagesOfThePostsRepository } from '@modules/posts/repositories/IImagesOfThePostsRepository';
import { AppError } from '@shared/errors/AppError';
import { deleteFile } from '@utils/file';

interface IRequest {
  imageID: string;
}

@injectable()
class DeleteImageOfThePostUseCase {
  constructor(
    @inject('ImagesOfThePostsRepository')
    private imagesOfThePostsRepository: IImagesOfThePostsRepository,
  ) {}

  async execute({ imageID }: IRequest): Promise<void> {
    const image = await this.imagesOfThePostsRepository.findById(imageID);

    if (!image) {
      throw new AppError('This image not found!', 404);
    }

    const imagesOfThePosts = await this.imagesOfThePostsRepository.findById(
      imageID,
    );

    if (imagesOfThePosts.imagesOfThePosts) {
      await deleteFile(
        `./tmp/imagesOfThePosts/${imagesOfThePosts.imagesOfThePosts}`,
      );
    }

    await this.imagesOfThePostsRepository.deleteImageOfThePost(imageID);
  }
}

export { DeleteImageOfThePostUseCase };
