import { Request, Response } from 'express';

export const getAllContests = async (req: Request, res: Response) => {
  return res.send({ msg: 'roda pra eu testar um negocio' });
};
