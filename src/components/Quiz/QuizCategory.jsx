import { useNavigate } from "react-router-dom";
import "./QuizCategory.css";

//연습 카테고리 지정 컴포넌트
export default function QuizCategory() {
  //클릭할 시
  const navigate = useNavigate();

  const onClickCategory = (quiz, title) => {};
  return (
    <>
      <div className="container">
        <h2>연습문제 카테고리</h2>
        <div className="inner">
          <div className="category" onClick={() => navigate("/mainQuiz/1")}>
            <h3> 일반 상식 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/2")}>
            <h3> 기초 영어 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/3")}>
            <h3> 과학 & 기술 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/4")}>
            <h3> 역사 & 문화 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/5")}>
            <h3> 스포츠 & 레저 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/6")}>
            <h3> 엔터테인먼트 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/7")}>
            <h3> 문학 & 철학 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/8")}>
            <h3> 수학 & 논리 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/9")}>
            <h3> 세계 여행 & 지리 퀴즈 </h3>
          </div>
        </div>
      </div>
    </>
  );
}
