import React, { useState, useEffect, useContext } from "react";
import "./RankPage.css";
import Ranking from "../../components/Rank/Ranking";
import { QuizContext } from "../../App";
import ScoreApi from "../../api/ScoreApi";

const RankPage = () => {
  const [ranking, setRanking] = useState([]);

  //랭킹 불러오기
  const getRank = async () => {
    const rsp = await ScoreApi.rank();
    console.log(rsp.data);

    setRanking(rsp.data);
  };
  useEffect(() => {
    getRank();
  }, []);

  return (
    <div className="rank-container">
      <h1 className="rank-title">현재 순위 확인</h1>

      <div className="rank-box">
        <p className="rank-text">
          {ranking.length > 0 ? (
            <strong>현재 1등:{ranking[0].name}</strong>
          ) : (
            <span className="rank-highlight">없음</span>
          )}
        </p>
        <p className="encourage-text">계속 도전해서 1등을 노려보자!</p>
      </div>

      <Ranking ranking={ranking} />
    </div>
  );
};

export default RankPage;
