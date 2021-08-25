import { getRepository, Repository } from 'typeorm';

import { IImagesOfThePostsRepository } from '@modules/posts/repositories/IImagesOfThePostsRepository';

import { ImagesOfThePosts } from '../entities/ImagesOfThePosts';

class ImagesOfThePostsRepository implements IImagesOfThePostsRepository {
  private repository: Repository<ImagesOfThePosts>;

  constructor() {
    this.repository = getRepository(ImagesOfThePosts);
  }

  async create(imagesOfThePosts: string, postID: string): Promise<void> {
    const image = this.repository.create({ imagesOfThePosts, postID });
    await this.repository.save(image);
  }
}

export { ImagesOfThePostsRepository };