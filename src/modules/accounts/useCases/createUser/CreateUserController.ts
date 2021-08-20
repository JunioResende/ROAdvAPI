import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      cpf,
      rg,
      organ,
      birthDate,
      age,
      telephone,
      email,
      password,
      cep,
      street,
      number,
      complement,
      district,
      city,
      uf,
      userSuperAdmin,
      userAdmin,
      biography,
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      cpf,
      rg,
      organ,
      birthDate,
      age,
      telephone,
      email,
      password,
      cep,
      street,
      number,
      complement,
      district,
      city,
      uf,
      userSuperAdmin,
      userAdmin,
      biography,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
