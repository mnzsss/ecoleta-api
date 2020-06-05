import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/items', ItemsController.index);

routes.post('/points', upload.single('image'), PointsController.create);
routes.get('/points/:id', PointsController.show);
routes.get('/points', PointsController.index);

export default routes;
