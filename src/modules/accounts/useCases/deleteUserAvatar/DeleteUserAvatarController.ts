import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserAvatarUseCase } from './DeleteUserAvatarUseCase';

class DeleteUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const deleteUserAvatarUseCase = container.resolve(DeleteUserAvatarUseCase);

    await deleteUserAvatarUseCase.execute({ userID: id });

    return response.status(204).send();
  }
}

export { DeleteUserAvatarController };
