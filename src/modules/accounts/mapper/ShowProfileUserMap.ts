import { classToClass } from 'class-transformer';

import { IShowUserProfileDTO } from '../dtos/IShowUserProfileDTO';
import { Users } from '../infra/typeorm/entities/Users';

class ShowProfileUserMap {
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
    biography,
    avatar,
  }: Users): IShowUserProfileDTO {
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
      biography,
      avatar,
    });

    return user;
  }
}

export { ShowProfileUserMap };
