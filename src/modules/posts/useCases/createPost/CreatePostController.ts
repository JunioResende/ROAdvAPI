import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostUseCase } from './CreatePostUseCase';

class CreatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const { post_title, posting } = request.body;

    const createPostUseCase = container.resolve(CreatePostUseCase);

    await createPostUseCase.execute({ post_title, posting, userID: id });

    return response.status(201).send();
  }
}

export { CreatePostController };
