import { getRepository, Repository } from 'typeorm';

import { ICreateUserDto } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { Users } from '../entities/Users';

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }
  async create({
    id,
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
    avatar,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      id,
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
      avatar,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
