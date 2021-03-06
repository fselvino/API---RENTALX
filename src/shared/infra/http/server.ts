import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { AppError } from '@shared/errors/AppErrors';
import createConnection from '@shared/infra/typeorm';
import '../../container';

import swaggerFile from '../../../swagger.json';
import { routers } from './routes';

// habilitar resolveJsonModule no arquivo de configuração tsconfig
createConnection();
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routers);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3333, () => {
  console.log('Server is running!');
});
