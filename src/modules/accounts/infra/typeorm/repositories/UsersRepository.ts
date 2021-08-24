import { getRepository, Repository } from 'typeorm';

import { ICreateUserDto } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '@modules/accounts/dtos/IUpdateUserDTO';
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

  async findById(id: string): Promise<Users> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async findByCpf(cpf: string): Promise<Users> {
    const user = await this.repository.findOne({ cpf });

    return user;
  }

  async findByEmail(email: string): Promise<Users> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async deleteUserAvatar(id: string, avatar: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update({ avatar })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }

  async findUser(name: string): Promise<Users> {
    const userQuery = this.repository.createQueryBuilder('C');

    if (name) {
      userQuery.andWhere('name = :name', { name });
    }

    const user = this.repository.findOne({ name });

    return user;
  }

  async updateUser({
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
    await this.repository
      .createQueryBuilder()
      .update({
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
      })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }

  async turnUserAdmin(id: string, userAdmin: boolean): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update({ userAdmin })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }
}

export { UsersRepository };
