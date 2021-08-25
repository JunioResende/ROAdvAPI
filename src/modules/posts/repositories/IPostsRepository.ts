import { ICreatePostsDTO } from '../dtos/ICreatePostsDTO';
import { IUpdatePostDTO } from '../dtos/IUpdatePostDTO';
import { Posts } from '../infra/typeorm/entities/Posts';

interface IPostsRepository {
  create({ post_title, posting, userID }: ICreatePostsDTO): Promise<void>;

  findById(id: string): Promise<Posts>;

  findByTitle(post_title: string): Promise<Posts>;

  findPosts(post_title: string): Promise<Posts[]>;

  updatePost({ id, post_title, posting }: IUpdatePostDTO): Promise<void>;

  deletePost(id: string): Promise<void>;
}

export { IPostsRepository };
