import { inject, injectable } from 'tsyringe';

import { IShowUserProfileDTO } from '@modules/accounts/dtos/IShowUserProfileDTO';
import { ShowProfileUserMap } from '@modules/accounts/mapper/ShowProfileUserMap';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  userID: string;
}

@injectable()
class ShowUserProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ userID }: IRequest): Promise<IShowUserProfileDTO> {
    const user = await this.usersRepository.findById(userID);

    return ShowProfileUserMap.toDTO(user);
  }
}

export { ShowUserProfileUseCase };
