import { Router } from 'express';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = Router();

routes.get('/items', ItemsController.index);
routes.get('/points/:id', PointsController.show);
routes.post('/points', PointsController.create);

export default routes;
