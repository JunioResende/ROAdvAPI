import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { deleteFile } from '@utils/file';

interface IRequest {
  userID: string;
}

@injectable()
class DeleteUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ userID }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userID);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    await this.usersRepository.deleteUserAvatar(userID, null);
  }
}

export { DeleteUserAvatarUseCase };
