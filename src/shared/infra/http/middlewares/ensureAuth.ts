import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '@config/auth/auth';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userID } = verify(token, auth.secretToken) as IPayload;

    request.user = {
      id: userID,
    };

    next();
  } catch {
    throw new AppError('Invalid JWT Token', 401);
  }
}
