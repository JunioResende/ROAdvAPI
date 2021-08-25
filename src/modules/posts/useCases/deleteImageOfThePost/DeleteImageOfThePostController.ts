import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteImageOfThePostUseCase } from './DeleteImageOfThePostUseCase';

class DeleteImageOfThePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteImageOfThePostUseCase = container.resolve(
      DeleteImageOfThePostUseCase,
    );

    await deleteImageOfThePostUseCase.execute({ imageID: id });

    return response.status(200).send();
  }
}

export { DeleteImageOfThePostController };
