import { Router } from 'express';

import { sessionsRoutes } from './sessions.routes';
import { usersRoutes } from './user.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use(sessionsRoutes);

export { routes };
