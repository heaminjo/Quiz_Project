import { useContext, useEffect, useState } from "react";
import "./RankingStyle.css";
import { QuizContext } from "../../App";
//leaderboard 대신 유저의 순위표 가져오기기
export default function Ranking({ isLoading }) {
  const { ranking, testData } = useContext(QuizContext);
  const [isRank, setIsRank] = useState(false);
  // useEffect(() => {
  //   if (testData != undefined) {
  //     setIsRank(true);
  //   } else {
  //     setIsRank(false);
  //   }
  // }, []);
  useEffect(() => {
    console.log(ranking);
  }, []);
  return (
    <div className="leaderboard">
      <h2 className="leaderboard-title">점수판</h2>
      <ul className="leaderboard-list">
        {testData.length != 0 ? (
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
