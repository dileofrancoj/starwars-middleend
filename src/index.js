import express from 'express';

const app = express();
const port = 8005;
const host = '0.0.0.0';

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.info(`Servidor iniciado en ${port}`);
});
