import { useNavigate } from "react-router-dom";
import HeaderComp from "./Headerstyle";
import Nav from "./Nav";
import { useEffect, useState } from "react";

export default function Header({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState([]);

  //로드 시 만약 로그인일 경우 localstorage에서 회원 정보를 가져온다.
  useEffect(() => {
    if (isLogin) {
      console.log("로그인 상태입니다.");
      setLoginUser(JSON.parse(localStorage.getItem("loginUser")));
    }
    console.log(loginUser.nickname);
  }, [isLogin]);
  // 오류 수정 이름 반영 안됌 => 의존성배열에 isLogin 을 넣어 로그인될때마다 업데이트트

  //로그아웃 클릭
  const clickLogout = () => {
    localStorage.clear();
    alert("로그아웃 됩니다.");
    setIsLogin(false);
    navigate("/");
  };
  return (
    <HeaderComp>
      <div className="header_inner">
        <div className="header_title">
          <h1 onClick={() => navigate("/")}>퀴즈 랜드</h1>
        </div>

        <ul className="member_menu">
          {isLogin ? (
            <>
              <li>{loginUser.nickname}님 환영합니다.</li>
              <li onClick={() => clickLogout()}>로그아웃</li>
            </>
          ) : (
            <>
              <li onClick={() => navigate("/login")}>로그인</li>
              <li onClick={() => navigate("/register")}>회원가입</li>
            </>
          )}
        </ul>
      </div>
      <Nav isLogin={isLogin} />
    </HeaderComp>
  );
}
