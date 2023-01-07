import express from 'express';
import { connection } from '../database/connection';
import { contestRoutes } from '../routes';

export const buildServer = async () => {
  const server = express();
  await connection();
  server.use('/api', contestRoutes);
  return server;
};
