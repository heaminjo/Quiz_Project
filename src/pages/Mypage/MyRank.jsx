import { useContext, useEffect, useState } from "react";
import ScoreItem from "../../components/Mypage/ScoreItem";
import MyRankComp from "./MyRankStyle";
import { QuizContext } from "../../App";

export default function MyRank() {
  //컨텍스트
  const { loginUser, testData, userTestData } = useContext(QuizContext);

  return (
    <MyRankComp>
      <div className="rank_inner">
        <div className="score_list">
          <h2>Test List</h2>
          <table>
            <tr>
              <th>순번</th>
              <th>닉네임</th>
              <th>문제 유형</th>
              <th>점수</th>
              <th>날짜</th>
            </tr>
            {userTestData.map((item) => (
              <ScoreItem scoreItem={item} />
            ))}
          </table>
        </div>
        <div className="user_score">
          <h2>{loginUser.nickname}</h2>
        </div>
      </div>
    </MyRankComp>
  );
}
