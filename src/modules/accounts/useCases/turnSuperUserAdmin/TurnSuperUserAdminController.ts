import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { TurnSuperUserAdminUseCase } from './TurnSuperUserAdminUseCase';

class TurnSuperUserAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const turnSuperUserAdminUseCase = container.resolve(
      TurnSuperUserAdminUseCase,
    );

    await turnSuperUserAdminUseCase.execute({ userID: id });

    return response.status(200).send();
  }
}

export { TurnSuperUserAdminController };
