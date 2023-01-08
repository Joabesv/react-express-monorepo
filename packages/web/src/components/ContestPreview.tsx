import { Contest } from '../utils/contest';

interface ContestPreviewProps {
  contest: Contest;
}

export function ContestPreview({ contest }: ContestPreviewProps) {
  return (
    <div className="contest-preview">
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
}
