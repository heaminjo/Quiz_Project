import { useNavigate } from "react-router-dom";
import NavComp from "./NavStyle";
import { QuizContext } from "../../App";
import { useContext } from "react";

export default function Nav() {
  //컨텍스트
  const { isLogin } = useContext(QuizContext);
  const navigate = useNavigate();

  //로그인 체크
  //비 로그인 시 로그인 화면으로 이동동
  const loginCheck = (move) => {
    if (isLogin) {
      navigate(move);
    } else {
      alert("로그인이 필요한 서비스입니다");
      navigate("/login");
    }
  };
  return (
    <NavComp>
      <div className="nav_inner">
        <ul className="nav_menu">
          <li onClick={() => loginCheck("/mainQuiz")}>실전문제</li>
          <li onClick={() => loginCheck("/quizCategory")}>연습문제</li>
          <li onClick={() => loginCheck("/rank")}>랭크</li>
          <li onClick={() => loginCheck("/myinfo")}>마이페이지</li>
        </ul>
      </div>
    </NavComp>
  );
}
