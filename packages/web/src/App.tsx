import { useEffect, useState } from 'react';
import { ContestList } from './components/ContestList';
import { Header } from './components/Header';
import { getContests } from './utils/getContests';
import { Contest } from './utils/contest';
import './global.css';

export function App() {
  const [contests, setContests] = useState<Contest[]>([]);

  useEffect(() => {
    const resolveData = async () => {
      const { contests } = await getContests();
      setContests(contests);
    };

    resolveData();
  }, []);

  return (
    <>
      <div className="container">
        <Header message="Naming Contests" />
        <ContestList contests={contests} />
      </div>
    </>
  );
}
