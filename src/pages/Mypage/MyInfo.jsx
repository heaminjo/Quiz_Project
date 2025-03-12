import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Myinfo() {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState("");

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("loginUser")));
    console.log(loginUser.email); // 체크
  }, []);
  return (
    <div className="mypage-container">
      {/* 오른쪽 메인 컨텐츠 영역 */}
      <div className="content">
        <h2>회원 정보</h2>
        <p>이름: {loginUser.nickname}</p>
        <p>이메일: {loginUser.email}</p>
        <Link to="/mypage/edit">내정보 수정</Link>
      </div>
    </div>
  );
}
