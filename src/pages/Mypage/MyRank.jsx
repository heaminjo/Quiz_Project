import ScoreItem from "../../components/Mypage/ScoreItem";

//내 순위, 점수
const scoredata = [
  { id: 1, content: "실전모의고사", score: 10, testDate: "2025-03-11" },
  { id: 2, content: "실전모의고사", score: 5, testDate: "2025-03-10" },
  { id: 3, content: "실전모의고사", score: 6, testDate: "2025-03-2" },
  { id: 4, content: "실전모의고사", score: 2, testDate: "2025-03-13" },
  { id: 5, content: "실전모의고사", score: 1, testDate: "2025-03-16" },
];
export default function MyRank() {
  return (
    <>
      <div className="rank_inner">
        <h2>Test List</h2>
        <ul>
          {scoredata.map((item) => (
            <ScoreItem scoreList={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
