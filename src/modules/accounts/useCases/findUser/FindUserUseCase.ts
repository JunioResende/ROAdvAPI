import { inject, injectable } from 'tsyringe';

import { IFindUserResponseDTO } from '@modules/accounts/dtos/IFindUserResponseDTO';
import { FindUserMap } from '@modules/accounts/mapper/FindUserMap';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  name: string;
}

@injectable()
class FindUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name }: IRequest): Promise<IFindUserResponseDTO> {
    const user = await this.usersRepository.findUser(name);

    return FindUserMap.toDTO(user);
  }
}

export { FindUserUseCase };
