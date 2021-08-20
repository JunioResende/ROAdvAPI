import { ICreateUserDto } from '../dtos/ICreateUserDTO';
import { Users } from '../infra/typeorm/entities/Users';

interface IUsersRepository {
  create({
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
  }: ICreateUserDto): Promise<void>;

  findByCpf(cpf: string): Promise<Users>;

  findByEmail(email: string): Promise<Users>;
}

export { IUsersRepository };
