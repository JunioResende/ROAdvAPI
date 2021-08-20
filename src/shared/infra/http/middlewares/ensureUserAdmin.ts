import { NextFunction, Request, Response } from 'express';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

export async function ensureUserAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(id);

  if (!user.userAdmin) {
    throw new AppError('This user is not userAdmin!');
  }

  return next();
}
