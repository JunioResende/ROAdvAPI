import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  userID: string;
}

@injectable()
class TurnSuperUserAdminUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ userID }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userID);

    if (!user) {
      throw new AppError('This user does not exist');
    }

    await this.usersRepository.turnSuperUserAdmin(userID, true);
  }
}

export { TurnSuperUserAdminUseCase };
