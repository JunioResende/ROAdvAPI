import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadImagesOfThePostsUseCase } from './UploadImagesOfThePostsUseCase';

interface IFiles {
  filename: string;
}

class UploadImagesOfThePostsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const images = request.files as IFiles[];

    const uploadImagesOfThePostsUseCase = container.resolve(
      UploadImagesOfThePostsUseCase,
    );

    const imagesOfThePosts = images.map(file => file.filename);

    await uploadImagesOfThePostsUseCase.execute({
      postID: id,
      imagesOfThePosts,
    });

    return response.status(201).send();
  }
}

export { UploadImagesOfThePostsController };
