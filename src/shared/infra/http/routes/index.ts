import { Router } from 'express';

import { postsRoutes } from './posts.routes';
import { sessionsRoutes } from './sessions.routes';
import { usersRoutes } from './user.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use(sessionsRoutes);

routes.use('/posts', postsRoutes);

export { routes };
