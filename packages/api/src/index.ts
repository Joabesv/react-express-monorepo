import { freemem } from 'node:os';
import { HOST, PORT, SERVER_URL } from './config/config';
import { buildServer } from './server';

const startServer = async () => {
  const server = await buildServer();

  server.get('/', async (req, res) => {
    res.send({ msg: 'say hi from express' });
  });

  server.listen(Number(PORT), HOST, () => {
    console.info(`
      loggando pq deu bom, rodando em, ${SERVER_URL},
      freeMem: ${freemem() / 1024 / 1024}`);
  });
};

startServer();
