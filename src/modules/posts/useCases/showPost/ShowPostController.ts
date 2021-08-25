import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowPostUseCase } from './ShowPostUseCase';

class ShowPostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showPostUseCase = container.resolve(ShowPostUseCase);

    const posting = await showPostUseCase.execute({ postID: id });

    return response.status(200).json(posting);
  }
}

export { ShowPostController };
