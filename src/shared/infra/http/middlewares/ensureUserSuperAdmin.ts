import { NextFunction, Request, Response } from 'express';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

export async function ensureSuperUserAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(id);

  if (!user.userSuperAdmin) {
    throw new AppError('This user is not userSuperAdmin!');
  }

  return next();
}
