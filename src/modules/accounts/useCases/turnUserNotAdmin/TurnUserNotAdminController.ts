import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { TurnUserNotAdminUseCase } from './TurnUserNotAdminUseCase';

class TurnUserNotAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const turnUserNotAdminUseCase = container.resolve(TurnUserNotAdminUseCase);

    await turnUserNotAdminUseCase.execute({ userID: id });

    return response.status(200).send();
  }
}

export { TurnUserNotAdminController };
