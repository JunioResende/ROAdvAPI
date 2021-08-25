import { ICreatePostsDTO } from '../dtos/ICreatePostsDTO';
import { Posts } from '../infra/typeorm/entities/Posts';

interface IPostsRepository {
  create({ postTitle, posting, userID }: ICreatePostsDTO): Promise<void>;

  findByTitle(postTitle: string): Promise<Posts>;
}

export { IPostsRepository };
