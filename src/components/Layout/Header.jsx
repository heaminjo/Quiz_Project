import { useNavigate } from "react-router-dom";
import HeaderComp from "./Headerstyle";
import Nav from "./Nav";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderComp>
      <div className="header_inner">
        <div className="header_title">
          <h1 onClick={() => navigate("/")}>퀴즈 랜드</h1>
        </div>
        <ul className="member_menu">
          <li onClick={() => navigate("/login")}>로그인</li>
          <li onClick={() => navigate("/register")}>회원가입</li>
        </ul>
      </div>
      <Nav />
    </HeaderComp>
  );
}
