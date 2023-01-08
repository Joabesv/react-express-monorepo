import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { connection } from '../../database/connection';

interface IContest {
  _id?: ObjectId;
  id: string;
  categoryName: string;
  contestName: string;
  description: string;
  names: Array<{
    id: string;
    name: string;
    timestamp: Date;
  }>;
}

export const getAllContests = async (req: Request, res: Response) => {
  const client = await connection();
  const contests = (await client
    .collection('contests')
    .find({})
    .toArray()) as IContest[];
  const data = contests.map(({ id, categoryName, contestName }) => ({
    id,
    categoryName,
    contestName,
  }));
  return res.status(200).send(data);
};
