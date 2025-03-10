//퀴즈 종료 결과 창 컴포넌트트
export default function QuizResult({ result }) {
  console.log("결과창" + result.current);
  return (
    <>
      <h1>종료 결과</h1>
      {/* 결과를 ref로 받아오는데 있어서 제대로 전달되지않음 */}
      {result.current.map((re) => console.log(re.content))}
    </>
  );
}
