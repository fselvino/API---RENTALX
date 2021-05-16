import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { Router } from 'express';

const carsRoutes = Router();
const createCarControloler = new CreateCarController();

carsRoutes.post('/', createCarControloler.handle);

export { carsRoutes };
