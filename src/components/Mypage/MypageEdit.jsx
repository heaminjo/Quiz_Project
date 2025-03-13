import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const MyPageEdit = () => {
  const navigate = useNavigate();

  // 로컬스토리지에서 로그인된 사용자 정보 가져오기
  const storedUser = JSON.parse(localStorage.getItem("loginUser")) || {};
  // 회원 정보 상태 관리
  const [user, setUser] = useState(storedUser);
  const [inputNick, setInputNick] = useState(user.nickname || "");
  // 닉네임 변경 핸들러
  const handleNicknameChange = (e) => {
    setInputNick(e.target.value);
  };

  // 닉네임 저장 핸들러
  const handleSave = () => {
    if (inputNick.trim().length < 2) {
      alert(`"닉네임은 최소 2자 이상이어야 합니다."`);
      return;
    }

    // 변경된 회원 정보 업데이트 후 로컬스토리지에 저장
    const updatedUser = { ...user, nickname: inputNick };
    setUser(updatedUser);
    localStorage.setItem("loginUser", JSON.stringify(updatedUser));
    alert(`닉네임이 '${inputNick}'(으)로 변경되었습니다.`);

    // myinfo 페이지로 이동
    navigate("/myinfo");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>내 정보 수정</h2>

      {/* 닉네임 입력 필드*/}
      <label className="nick">
        <div className="nick">
          <p>닉네임:</p>
        </div>
        <input
          type="text"
          value={inputNick}
          onChange={handleNicknameChange}
          style={{ marginLeft: "10px", padding: "5px" }}
          className="nickinput"
        />
      </label>

      <br />
      <br />

      {/* 저장 버튼 + myinfo 페이지로 이동 */}
      <button
        className="goedit"
        onClick={handleSave}
        style={{ padding: "5px 10px" }}
      >
        저장
      </button>

      <br />
      <br />

      {/* 마이페이지로 돌아가는 링크 */}
      <div className="gomypage">
        <Link to="/mypage">마이페이지로 돌아가기</Link>
      </div>
    </div>
  );
};

export default MyPageEdit;
