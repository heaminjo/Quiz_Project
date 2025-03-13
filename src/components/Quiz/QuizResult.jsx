import { useContext, useEffect, useRef, useState } from "react";
import "./QuizResult.css";
import { QuizContext } from "../../App";
import { useNavigate } from "react-router-dom";
//퀴즈 종료 결과 창 컴포넌트
export default function QuizResult({ result, setResultModal }) {
  //컨텍스트
  const { addTestData, testData, loginUser } = useContext(QuizContext);

  const [user, setUser] = useState([]);

  const resultRef = useRef(testData.length);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(result.current.length);
    // 푼 문제 데이터를 객체로 저장하고 멤버의 기본키를 저장한다.
    const testData = {
      id: resultRef.current,
      memberId: loginUser.id,
      memberName: loginUser.nickname,
      title: "실전 모의고사",
      testDate: new Date().toLocaleString(),
      resultNum: result.current.length,
    };

    resultRef.current += 1;

    addTestData(testData);
  }, []);

  return (
    <>
      <div className="result_container">
        <h1>종료 결과</h1>
        <div className="endQuiz">
          {result.current != 0 ? (
            <>
              {result.current.map((re) => (
                <div className="quizResult">
                  <p>
                    번호: {re.quizNum} | 문제 내용: {re.question} | 정답 :{" "}
                    {re.result}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <p id="zeroPoint">빵점입니다.</p>
          )}
        </div>
        <div className="result_bottom">
          <p id="score">총점: {result.current.length}/20</p>
          <div className="menu_btn">
            <button
              onClick={() => {
                setResultModal(false);
                navigate("/mainquiz");
              }}
            >
              다시하기
            </button>
            <button onClick={() => navigate("/rank")}>랭크 보기</button>
            <button onClick={() => navigate("/myrank")}>마이 랭크 보기</button>
          </div>
        </div>
      </div>
    </>
  );
}
