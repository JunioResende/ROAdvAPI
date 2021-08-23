import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadUserAvatarUseCase } from './UploadUserAvatarUseCase';

class UploadUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const avatarFile = request.file.filename;

    const uploadUserAvatarUseCase = container.resolve(UploadUserAvatarUseCase);

    await uploadUserAvatarUseCase.execute({
      userID: id,
      avatarFile,
    });

    return response.status(201).send();
  }
}

export { UploadUserAvatarController };
