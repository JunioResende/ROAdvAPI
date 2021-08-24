import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const {
      name,
      cpf,
      rg,
      organ,
      age,
      telephone,
      email,
      cep,
      street,
      number,
      complement,
      district,
      city,
      uf,
      biography,
    } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({
      id,
      name,
      cpf,
      rg,
      organ,
      age,
      telephone,
      email,
      cep,
      street,
      number,
      complement,
      district,
      city,
      uf,
      biography,
    });

    return response.status(201).send();
  }
}

export { UpdateUserController };
