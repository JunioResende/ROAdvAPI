import { getRepository, Repository } from 'typeorm';

import { ICreatePostsDTO } from '@modules/posts/dtos/ICreatePostsDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

import { Posts } from '../entities/Posts';

class PostsRepository implements IPostsRepository {
  private repository: Repository<Posts>;

  constructor() {
    this.repository = getRepository(Posts);
  }

  async create({
    post_title,
    posting,
    userID,
  }: ICreatePostsDTO): Promise<void> {
    const posts = this.repository.create({ post_title, posting, userID });

    await this.repository.save(posts);
  }

  async findById(id: string): Promise<Posts> {
    const posts = await this.repository.findOne(id);

    return posts;
  }

  async findByTitle(post_title: string): Promise<Posts> {
    const posts = await this.repository.findOne({ post_title });

    return posts;
  }

  async findPosts(post_title: string): Promise<Posts[]> {
    const postsQuery = this.repository.createQueryBuilder();

    if (post_title) {
      postsQuery.andWhere('post_title = :post_title', { post_title });
    }

    const posts = await postsQuery.getMany();

    return posts;
  }
}

export { PostsRepository };
