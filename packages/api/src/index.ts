import { freemem } from 'node:os';
import { HOST, PORT, SERVER_URL } from './config/config';
import { server } from './server';

server.listen(Number(PORT), HOST, () => {
  console.info(`
    loggando pq deu bom, rodando em, ${SERVER_URL},
    freeMem: ${freemem() / 1024 / 1024}`);
});
