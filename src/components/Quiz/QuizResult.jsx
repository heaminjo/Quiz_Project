//퀴즈 종료 결과 창 컴포넌트트
export default function QuizResult({ result }) {
  console.log("결과창" + result.current);
  return (
    <>
      <h1>종료 결과</h1>
      {result.current.map((re) => (
        <p>
          번호: {re.id} | 문제 내용: {re.question} | 정답 : {re.result}
        </p>
      ))}
      <p>{result.length}</p>
    </>
  );
}
