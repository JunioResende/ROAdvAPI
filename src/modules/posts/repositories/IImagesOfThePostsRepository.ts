import { ImagesOfThePosts } from '../infra/typeorm/entities/ImagesOfThePosts';

interface IImagesOfThePostsRepository {
  create(imagesOfThePosts: string, post_id: string): Promise<void>;

  findById(id: string): Promise<ImagesOfThePosts>;

  findByPostId(post_id: string): Promise<ImagesOfThePosts[]>;

  deleteImageOfThePost(id: string): Promise<void>;
}

export { IImagesOfThePostsRepository };
