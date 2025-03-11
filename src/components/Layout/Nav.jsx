import { useNavigate } from "react-router-dom";
import NavComp from "./NavStyle";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <NavComp>
      <div className="nav_inner">
        <ul className="nav_menu">
          <li onClick={() => navigate("/mainQuiz")}>실전문제</li>
          <li onClick={() => navigate("/quizCategory")}>연습문제</li>
          <li>랭크</li>
          <li onClick={() => navigate("/myinfo")}>마이페이지</li>
        </ul>
      </div>
    </NavComp>
  );
}
