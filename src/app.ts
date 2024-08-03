import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

const port = config.get<number>('port');
const app = express();

// Registrar las rutas
routes(app);

app.listen(port, async () => {
  // Log para indicar que la aplicación está escuchando en el puerto especificado
  logger.info(`App listening on port ${port}`);

  // Conectar a la base de datos
  await connect();
});
