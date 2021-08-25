import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePostUseCase } from './UpdatePostUseCase';

class UpdatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { post_title, posting } = request.body;

    const updatePostUseCase = container.resolve(UpdatePostUseCase);

    await updatePostUseCase.execute({ id, post_title, posting });

    return response.status(201).send();
  }
}

export { UpdatePostController };
