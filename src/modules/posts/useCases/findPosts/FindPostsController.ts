import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindPostsUseCase } from './FindPostsUseCase';

class FindPostsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { post_title } = request.query;

    const findPostsUseCase = container.resolve(FindPostsUseCase);

    const posts = await findPostsUseCase.execute({
      post_title: post_title as string,
    });

    return response.status(201).json(posts);
  }
}

export { FindPostsController };
