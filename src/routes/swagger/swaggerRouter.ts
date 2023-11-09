import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { default as swaggerDocument } from '../../swagger.json';

export const swaggerRouter = express.Router();

swaggerRouter.use(
  '/api/v1/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);
