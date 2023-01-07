import { Router } from 'express';
import { getAllContests } from './contests/getAllContests';

const contestRoutes = Router();

contestRoutes.get('/contests', getAllContests);

export { contestRoutes };
