import "./QuizResult.css";

//퀴즈 종료 결과 창 컴포넌트트
export default function QuizResult({ result }) {
  console.log("결과창" + result.current);

  return (
    <>
      <h1>종료 결과</h1>
      <div className="endQuiz">
        {result.current.map((re) => (
          <div className="quizResult">
            <p>
              번호: {re.quizNum} | 문제 내용: {re.question} | 정답 : {re.result}
            </p>
          </div>
        ))}
      </div>
      <p id="score">총점: {result.current.length}개</p>
    </>
  );
}
