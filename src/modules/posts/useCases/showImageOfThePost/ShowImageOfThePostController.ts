import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowImageOfThePostUseCase } from './ShowImageOfThePostUseCase';

class ShowImageOfThePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showImageOfThePostUseCase = container.resolve(
      ShowImageOfThePostUseCase,
    );

    const imageOfThePost = await showImageOfThePostUseCase.execute({
      imageID: id,
    });

    return response.status(200).json(imageOfThePost);
  }
}

export { ShowImageOfThePostController };
