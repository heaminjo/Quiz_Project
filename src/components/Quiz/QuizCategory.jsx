import { useNavigate } from "react-router-dom";

//연습 카테고리 지정 컴포넌트
export default function QuizCategory() {
  //클릭할 시
  const navigate = useNavigate();
  return (
    <>
      <h2>ExQuiz 카테고리</h2>
      <div onClick={() => navigate("")}>
        <h3> 상식퀴즈 </h3>
      </div>
      <div onClick={() => navigate("")}>
        <h3> ?? 퀴즈 </h3>
      </div>
      <div onClick={() => navigate("")}>
        <h3> ?? 퀴즈 </h3>
      </div>
      <div onClick={() => navigate("")}>
        <h3> ?? 퀴즈 </h3>
      </div>
      <div onClick={() => navigate("")}>
        <h3> ?? 퀴즈 </h3>
      </div>
    </>
  );
}
