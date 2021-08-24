import { inject, injectable } from 'tsyringe';

import { IUpdateUserDTO } from '@modules/accounts/dtos/IUpdateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
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
  }: IUpdateUserDTO): Promise<void> {
    await this.usersRepository.updateUser({
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
  }
}

export { UpdateUserUseCase };
