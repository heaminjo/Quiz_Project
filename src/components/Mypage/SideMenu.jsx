import { Link, Navigate, useNavigate } from "react-router-dom";
import "./SideMenuStyle.css";
import { useContext } from "react";
import { QuizContext } from "../../App";

export default function SideMenu() {
  //컨텍스트트
  const { setIsLogin } = useContext(QuizContext);
  const navigate = useNavigate();
  // 로그아웃 처리 함수
  const handleLogout = () => {
    alert("로그아웃 되었습니다.");
    localStorage.clear();
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => navigate("/myinfo")}>내 정보</li>
        <li onClick={() => navigate("/myedit")}>정보 수정</li>

        <li onClick={() => navigate("/myrank")}>나의 랭크</li>

        <li onClick={() => handleLogout()} className="logout">
          로그아웃
        </li>
      </ul>
    </nav>
  );
}
