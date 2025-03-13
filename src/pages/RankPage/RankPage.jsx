import React, { useState, useEffect, useContext } from "react";
import "./RankPage.css";
import Ranking from "../../components/Rank/Ranking";
import { QuizContext } from "../../App";

const RankPage = () => {
  const { ranking } = useContext(QuizContext);

  const [topUser, setTopUser] = useState("없음");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (ranking.length != 0) {
      //1순위 유저 이름
      setTopUser(ranking[0].memberName);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="rank-container">
      <h1 className="rank-title">현재 순위 확인</h1>

      <div className="rank-box">
        {isLoading ? (
          <p className="loading-message">데이터를 불러오는 중...</p>
        ) : (
          <>
            <p className="rank-text">
              <strong>현재 1등:</strong>
              <span className="rank-highlight">{topUser}</span>
            </p>
            <p className="encourage-text">계속 도전해서 1등을 노려보자!</p>
          </>
        )}
      </div>

      <Ranking isLoading={isLoading} leaderboard={ranking} />
    </div>
  );
};

export default RankPage;
