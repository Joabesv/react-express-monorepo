import { useId } from 'react';
import { Contest } from '../utils/contest';

interface ContestListProps {
  contests: Array<Contest>;
}

export function ContestList({ contests }: ContestListProps) {
  return (
    <>
      <div className="contest-list">
        {contests.map((contest) => {
          return (
            <div className="contest-preview" key={useId()} >
              <div className="category">{contest.categoryName}</div>
              <div className="contest">{contest.contestName}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
