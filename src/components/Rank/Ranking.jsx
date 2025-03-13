import { useEffect } from "react";
import "./RankingStyle.css";
//leaderboard 대신 유저의 순위표 가져오기기
export default function Ranking({ isLoading, ranking }) {
  useEffect(() => {
    console.log(ranking);
  }, []);
  return (
    <div className="leaderboard">
      <h2 className="leaderboard-title">점수판</h2>
      <ul className="leaderboard-list">
        {ranking != undefined ? (
          ranking.map((user, index) => (
            <li key={index} className="leaderboard-item">
              <span className="rank-number">{index + 1}.</span>
              <span className="rank-name">{user.memberName}</span>
              <span className="rank-score">{user.resultNum} pts</span>
            </li>
          ))
        ) : (
          <p className="loading-message">아직 순위 데이터가 없습니다.</p>
        )}
      </ul>
    </div>
  );
}
