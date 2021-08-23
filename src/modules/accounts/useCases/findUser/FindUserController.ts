import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserUseCase } from './FindUserUseCase';

class FindUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const findUserUseCase = container.resolve(FindUserUseCase);

    const user = await findUserUseCase.execute({ name: name as string });

    return response.json(user);
  }
}

export { FindUserController };
