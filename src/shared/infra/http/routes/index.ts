import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';
import { usersRoutes } from './users.routes';

const routers = Router();

routers.use('/categories', categoriesRoutes);

routers.use('/specifications', specificationsRoutes);

routers.use('/users', usersRoutes);

routers.use('/cars', carsRoutes);

routers.use(authenticateRoutes);

export { routers };
