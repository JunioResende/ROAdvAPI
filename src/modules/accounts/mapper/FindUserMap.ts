import { classToClass } from 'class-transformer';

import { IFindUserResponseDTO } from '../dtos/IFindUserResponseDTO';
import { Users } from '../infra/typeorm/entities/Users';

class FindUserMap {
  static toDTO({
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
    userSuperAdmin,
    userAdmin,
    biography,
    avatar,
    created_at,
    updated_at,
  }: Users): IFindUserResponseDTO {
    const user = classToClass({
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
      userSuperAdmin,
      userAdmin,
      biography,
      avatar,
      created_at,
      updated_at,
    });

    return user;
  }
}

export { FindUserMap };
