import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindImagesOfThePostsUseCase } from './FindImagesOfThePostsUseCase';

class FindImagesOfThePostsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findImagesOfThePostsUseCase = container.resolve(
      FindImagesOfThePostsUseCase,
    );

    const imagesOfThePosts = await findImagesOfThePostsUseCase.execute({
      post_id: id,
    });

    return response.status(200).json(imagesOfThePosts);
  }
}

export { FindImagesOfThePostsController };
