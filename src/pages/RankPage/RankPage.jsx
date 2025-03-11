import React, { useState, useEffect } from "react";
import "./RankPage.css";

const RankPage = ({ userScore }) => {
  // 상태 관리
  const [myRank, setMyRank] = useState(null); // 내 순위
  const [topUser, setTopUser] = useState("User"); // 1등 참가자
  const [playerCount, setPlayerCount] = useState(150); // 총 참가자
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  // 랭킹 데이터 가져오기
  useEffect(() => {
    const fetchRanking = async () => {
      setIsLoading(true); // 데이터 가져오기

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 가짜 로딩 효과 (1초)
        const response = await fetch("/api/rank");
        const data = await response.json();

        setMyRank(data.userRank);
        setTopUser(data.firstPlace);
        setPlayerCount(data.totalUsers);
        setLeaderboard(data.rankList);
      } catch (error) {
        console.error("랭킹 데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRanking();
  }, [userScore]);

  return (
    <div className="rank-container">
      {/* 제목 */}
      <h1 className="rank-title">현재 순위 확인</h1>

      {/* 내 순위 정보 */}
      <div className="rank-box">
        {isLoading ? (
          <p className="loading-message">데이터를 불러오는 중...</p>
        ) : (
          <>
            <p className="rank-text">
              <strong>내 순위:</strong>{" "}
              <span className="rank-highlight">{myRank}등</span> / {playerCount}
              명 중
            </p>
            <p className="rank-text">
              <strong>현재 1등:</strong>{" "}
              <span className="rank-highlight">{topUser}</span>
            </p>
            <p className="encourage-text">계속 도전해서 1등을 노려보자!</p>
          </>
        )}
      </div>

      {/* 점수판 */}
      <div className="leaderboard">
        <h2 className="leaderboard-title">점수판</h2>
        <ul className="leaderboard-list">
          {isLoading ? (
            <p className="loading-message">순위 정보를 불러오는 중...</p>
          ) : leaderboard.length > 0 ? (
            leaderboard.map((user, index) => (
              <li key={index} className="leaderboard-item">
                <span className="rank-number">{index + 1}.</span>
                <span className="rank-name">{user.name}</span>
                <span className="rank-score">{user.score} pts</span>
              </li>
            ))
          ) : (
            <p className="loading-message">아직 순위 데이터가 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RankPage;
