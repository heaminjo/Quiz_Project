import { useContext, useEffect, useState } from "react";
import ScoreItem from "../../components/Mypage/ScoreItem";
import MyRankComp from "./MyRankStyle";
import { QuizContext } from "../../App";

export default function MyRank() {
  //컨텍스트
  const { loginUser, userTestData } = useContext(QuizContext);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    //map을 통해점수만 배열로 가져오기
    const score = userTestData.map((test) => test.resultNum);
    console.log(score);

    //점수들중 가장 높은 점수
    setMaxScore(Math.max(...score));
    console.log("가장높은점수" + maxScore);
  }, []);

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
          <div className="userData">
            <h2>{loginUser.nickname}님의 최고 점수</h2>
            <p>{maxScore}</p>
          </div>
        </div>
      </div>
    </MyRankComp>
  );
}
