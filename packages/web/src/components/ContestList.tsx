import { Contest } from '../utils/contest';
import { ContestPreview } from './ContestPreview';

interface ContestListProps {
  contests: Contest[];
}

export function ContestList({ contests }: ContestListProps) {
  return (
    <>
      <div className="contest-list">
        {contests.map((contest) => {
          return <ContestPreview key={contest.id} contest={contest} />;
        })}
      </div>
    </>
  );
}
