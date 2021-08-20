import { ICreateUserDto } from '../dtos/ICreateUserDTO';

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
}

export { IUsersRepository };
