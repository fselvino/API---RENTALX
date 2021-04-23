import express from 'express';
import swaggerUi from 'swagger-ui-express';

import './database';

import './shared/container';
import { routers } from './routes';

// habilitar resolveJsonModule no arquivo de configuração tsconfig
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routers);

app.listen(3333, () => {
  console.log('Server is running!');
});
