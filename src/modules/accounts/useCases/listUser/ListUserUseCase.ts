import { inject, injectable } from 'tsyringe';

import { IListUserResponseDTO } from '@modules/accounts/dtos/IListUserResponseDTO';
import { ListUserMap } from '@modules/accounts/mapper/ListUserMap';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  userID: string;
}

@injectable()
class ListUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ userID }: IRequest): Promise<IListUserResponseDTO> {
    const user = await this.usersRepository.findById(userID);

    if (!user) {
      throw new AppError('This user does not exist');
    }

    return ListUserMap.toDTO(user);
  }
}

export { ListUserUseCase };
