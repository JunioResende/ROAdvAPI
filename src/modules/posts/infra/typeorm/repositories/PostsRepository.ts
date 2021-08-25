import { getRepository, Repository } from 'typeorm';

import { ICreatePostsDTO } from '@modules/posts/dtos/ICreatePostsDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

import { Posts } from '../entities/Posts';

class PostsRepository implements IPostsRepository {
  private repository: Repository<Posts>;

  constructor() {
    this.repository = getRepository(Posts);
  }

  async create({ postTitle, posting, userID }: ICreatePostsDTO): Promise<void> {
    const posts = this.repository.create({ postTitle, posting, userID });

    await this.repository.save(posts);
  }

  async findById(id: string): Promise<Posts> {
    const posts = await this.repository.findOne(id);

    return posts;
  }

  async findByTitle(postTitle: string): Promise<Posts> {
    const posts = await this.repository.findOne({ postTitle });

    return posts;
  }
}

export { PostsRepository };
