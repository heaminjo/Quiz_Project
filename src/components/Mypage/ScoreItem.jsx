//점수 목록 아이템
export default function ScoreItem({ scoreItem }) {
  console.log(scoreItem);
  return (
    <p>
      {scoreItem.title} 점수: {scoreItem.resultNum} 점
    </p>
  );
}
