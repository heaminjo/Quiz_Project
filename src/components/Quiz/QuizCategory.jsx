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
          <div
            className="category"
            onClick={() => navigate("/mainQuiz/commen")}
          >
            <h3> 일반 상식 퀴즈 </h3>
          </div>
          <div
            className="category"
            onClick={() => navigate("/mainQuiz/english")}
          >
            <h3> 기초 영어 퀴즈 </h3>
          </div>
          <div
            className="category"
            onClick={() => navigate("/mainQuiz/science")}
          >
            <h3> 과학 & 기술 퀴즈 </h3>
          </div>
          <div
            className="category"
            onClick={() => navigate("/mainQuiz/history")}
          >
            <h3> 역사 & 문화 퀴즈 </h3>
          </div>
          <div
            className="category"
            onClick={() => navigate("/mainQuiz/sports")}
          >
            <h3> 스포츠 & 레저 퀴즈 </h3>
          </div>
          <div
            className="category"
            onClick={() => navigate("/mainQuiz/entertainment")}
          >
            <h3> 엔터테인먼트 퀴즈 </h3>
          </div>
          <div
            className="category"
            onClick={() => navigate("/mainQuiz/literature")}
          >
            <h3> 문학 & 철학 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/math")}>
            <h3> 수학 & 논리 퀴즈 </h3>
          </div>
          <div className="category" onClick={() => navigate("/mainQuiz/world")}>
            <h3> 세계 여행 & 지리 퀴즈 </h3>
          </div>
        </div>
      </div>
    </>
  );
}
