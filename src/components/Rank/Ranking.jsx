import { useContext, useEffect, useState } from "react";
import "./RankingStyle.css";
import MemberApi from "../../api/MemberApi";
import { useNavigate } from "react-router-dom";
//leaderboard 대신 유저의 순위표 가져오기기
export default function Ranking({ ranking }) {
  const navigate = useNavigate();

  return (
    <div className="leaderboard">
      <h2 className="leaderboard-title">점수판</h2>
      <ul className="leaderboard-list">
        {ranking.length != 0 ? (
          ranking.map((user, index) => (
            <li key={index} className="leaderboard-item">
              <span className="rank-number">{index + 1}.</span>
              <span className="rank-name">{user.name}</span>
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
