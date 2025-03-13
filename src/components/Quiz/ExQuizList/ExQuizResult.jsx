import { useNavigate } from "react-router-dom";
import "../QuizResult.css";
//퀴즈 종료 결과 창 컴포넌트
export default function ExQuizResult({ result, addTestData, setResultModal }) {
  const navigate = useNavigate();

  return (
    <>
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
      <p id="score">총점: {result.current.length}/20</p>
      <button
        onClick={() => {
          setResultModal(false);
          navigate("/QuizCategory");
        }}
      >
        다시하기
      </button>
      <button onClick={() => navigate("/rank")}>랭크 보기</button>
      <button onClick={() => navigate("/myrank")}>마이 랭크 보기</button>
    </>
  );
}
