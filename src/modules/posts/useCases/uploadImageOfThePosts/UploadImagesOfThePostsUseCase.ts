import { inject, injectable } from 'tsyringe';

import { IUploadImagesOfThePostsDTO } from '@modules/posts/dtos/IUploadImagesOfThePostsDTO';
import { IImagesOfThePostsRepository } from '@modules/posts/repositories/IImagesOfThePostsRepository';

@injectable()
class UploadImagesOfThePostsUseCase {
  constructor(
    @inject('ImagesOfThePostsRepository')
    private imagesOfThePostsRepository: IImagesOfThePostsRepository,
  ) {}

  async execute({
    imagesOfThePosts,
    post_id,
  }: IUploadImagesOfThePostsDTO): Promise<void> {
    imagesOfThePosts.map(async image => {
      await this.imagesOfThePostsRepository.create(image, post_id);
    });
  }
}

export { UploadImagesOfThePostsUseCase };
