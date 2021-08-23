import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { deleteFile } from '@utils/file';

interface IRequest {
  userID: string;
  avatarFile: string;
}

@injectable()
class UploadUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ userID, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userID);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UploadUserAvatarUseCase };
