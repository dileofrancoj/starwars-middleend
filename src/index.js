import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './api';
import { redisStart } from './config/redis';

const app = express();
const port = 8005;
const host = '0.0.0.0';

app.use(cors());
// app.use(express.json());
app.use(morgan('combined'));

redisStart();

app.use('/api/', routes);

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.info(`Servidor iniciado en ${port}`);
});
