import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// 1.localstarage에서 현재 로그인 된 회원 정보 꺼내오기 localstorage.getitem("loginUser")
// 2. 회원 상태 변수에 담아서 ...연산자 사용 해서

const MyPageEdit = () => {
  // 닉네임 상태 관리
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  // 닉네임 저장 함수
  // const handleSave = () => {
  //   if (nickname.trim().length < 2) {
  //     alert("닉네임은 최소 2자 이상이어야 합니다.");
  //     return;
  //   }
  //   alert(`닉네임이 '${nickname}'(으)로 변경되었습니다.`);
  //   navigate("/mypage"); // 마이페이지로 이동
  // };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>내 정보 수정</h2>

      {/* 닉네임 입력 필드 */}
      <label>
        닉네임:
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </label>

      <br />
      <br />

      {/* 저장 버튼 */}
      <button style={{ padding: "5px 10px" }}>저장</button>

      <br />
      <br />

      {/* 마이페이지로 돌아가는 링크 */}
      <Link to="/mypage">마이페이지로 돌아가기</Link>
    </div>
  );
};

export default MyPageEdit;
