import { ICreateUserDto } from '../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import { Users } from '../infra/typeorm/entities/Users';

interface IUsersRepository {
  create({
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
  }: ICreateUserDto): Promise<void>;

  findById(id: string): Promise<Users>;

  findByCpf(cpf: string): Promise<Users>;

  findByEmail(email: string): Promise<Users>;

  deleteUserAvatar(id: string, avatar: string): Promise<void>;

  findUser(name: string): Promise<Users>;

  updateUser({
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
  }: IUpdateUserDTO): Promise<void>;

  turnUserAdmin(id: string, userAdmin: boolean): Promise<void>;
}

export { IUsersRepository };
