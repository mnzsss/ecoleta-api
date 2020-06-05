import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import multer from 'multer';

import uploadConfig from './config/upload';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/items', ItemsController.index);

routes.post(
  '/points',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    }),
  }),
  upload.single('image'),
  PointsController.create,
);
routes.get('/points/:id', PointsController.show);
routes.get('/points', PointsController.index);

export default routes;
