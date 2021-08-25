import { ImagesOfThePosts } from '../infra/typeorm/entities/ImagesOfThePosts';

interface IImagesOfThePostsRepository {
  create(imagesOfThePosts: string, post_id: string): Promise<void>;

  findByPostId(post_id: string): Promise<ImagesOfThePosts[]>;
}

export { IImagesOfThePostsRepository };
