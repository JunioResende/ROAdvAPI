import { classToClass } from 'class-transformer';

import { IListUserResponseDTO } from '../dtos/IListUserResponseDTO';
import { Users } from '../infra/typeorm/entities/Users';

class ListUserMap {
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
  }: Users): IListUserResponseDTO {
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

export { ListUserMap };
