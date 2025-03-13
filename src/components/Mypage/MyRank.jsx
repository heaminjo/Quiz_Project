import { useContext, useEffect, useState } from "react";
import ScoreItem from "./ScoreItem";
import MyRankComp from "./MyRankStyle";
import { QuizContext } from "../../App";
import king from "../../image/king.png";
import { useNavigate } from "react-router-dom";

export default function MyRank() {
  //컨텍스트
  const { loginUser, userTestData } = useContext(QuizContext);
  const [maxScore, setMaxScore] = useState(0);

  const navigate = useNavigate();

  //점수가 있는지 확인하는 변수수
  const [isScore, setIsScore] = useState(false);

  //로드 시 가장 높은 점수를 구한다.
  useEffect(() => {
    //테스트 기록이 존재할 경우우
    //map을 통해점수만 배열로 가져오기
    if (userTestData.length != 0) {
      const score = userTestData.map((test) => test.resultNum);

      //점수들중 가장 높은 점수
      setMaxScore(Math.max(...score));
      setIsScore(true);
    }
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
          <img src={king} alt="" />
          <div className="userData">
            {isScore ? (
              <>
                <h2>{loginUser.nickname}님의 최고 점수</h2>
                <p id="max_score">{maxScore}</p>
              </>
            ) : (
              <>
                <p>{loginUser.nickname}님의 최고 점수</p>
                <p>************기록 없음************</p>
                <span onClick={() => navigate("/mainQuiz")}>
                  문제 도전하러 가기
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </MyRankComp>
  );
}
