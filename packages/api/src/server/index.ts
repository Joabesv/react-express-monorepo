import express from 'express';
import { contestRoutes } from '../routes';

const server = express();

server.use('/api', contestRoutes);

server.get('/', async (req, res) => {
  res.send({ msg: 'say hi from express' });
});

export { server };
