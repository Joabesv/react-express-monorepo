import { Contest } from './contest';

const { VITE_API_SERVER_URL } = import.meta.env;

export interface ContestType {
  contests: Contest[];
}

export const getContests = async (): Promise<ContestType> => {
  const response = await fetch(`${VITE_API_SERVER_URL}/contests`);
  if (!response.ok) {
    throw new Error('Error fetching the api', { cause: response.status });
  }
  const data = (await response.json()) as ContestType;
  return data;
};
