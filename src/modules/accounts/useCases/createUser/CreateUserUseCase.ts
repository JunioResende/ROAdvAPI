import { inject, injectable } from 'tsyringe';

import { ICreateUserDto } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
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
  }: ICreateUserDto): Promise<void> {
    const userExistsByCpf = await this.usersRepository.findByCpf(cpf);

    if (userExistsByCpf) {
      throw new AppError('There is a user registered with this cpf');
    }

    const userExistsByEmail = await this.usersRepository.findByEmail(email);

    if (userExistsByEmail) {
      throw new AppError('There is a user registered with this email');
    }

    await this.usersRepository.create({
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
  }
}

export { CreateUserUseCase };
