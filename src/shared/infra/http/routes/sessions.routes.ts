import { Router } from 'express';

import { AuthenticateUserController } from '@modules/accounts/useCases/AuthenticateUser/AuthenticateUserController';

const sessionsRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

sessionsRoutes.post('/sessions', authenticateUserController.handle);

export { sessionsRoutes };
