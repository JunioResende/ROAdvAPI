import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { TurnNotSuperUserAdminUseCase } from './TurnNotSuperUserAdminUseCase';

class TurnNotSuperUserAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const turnNotSuperUserAdminUseCase = container.resolve(
      TurnNotSuperUserAdminUseCase,
    );

    await turnNotSuperUserAdminUseCase.execute({ userID: id });

    return response.status(201).send();
  }
}

export { TurnNotSuperUserAdminController };
