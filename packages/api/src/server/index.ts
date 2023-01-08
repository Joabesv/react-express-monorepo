import express from 'express';
import cors from 'cors';
import { connection } from '../database/connection';
import { contestRoutes } from '../routes';

export const buildServer = async () => {
  const server = express();
  await connection();
  server.use(cors());
  server.use('/api', contestRoutes);
  return server;
};
