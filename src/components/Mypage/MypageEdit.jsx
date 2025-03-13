import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Myedit.css";
import { QuizContext } from "../../App";
const MyPageEdit = () => {
  const navigate = useNavigate();

  const { loginUser, setLoginUser, members, setMembers } =
    useContext(QuizContext);

  // 회원 정보 상태 관리
  const [inputNick, setInputNick] = useState(loginUser.nickname);

  // 닉네임 저장 핸들러
  const handleSave = () => {
    if (inputNick.trim().length < 2) {
      alert(`"닉네임은 최소 2자 이상이어야 합니다."`);
      return;
    }

    // myinfo 페이지로 이동
    navigate("/myinfo");
  };

  //닉네임 업데이트 함수
  const updateMember = () => {
    //로그인 된 유저를 찾아 기존 데이터는 유지하되 닉네임만 입력된 값으로 변경
    setMembers(
      members.map((member) =>
        member.id == loginUser.id ? { ...member, nickname: inputNick } : member
      )
    );

    setLoginUser({ ...loginUser, nickname: inputNick });

    alert("닉네임이 성공적으로 수정되었습니다.");
    console.log(members);
    navigate("/myinfo");
  };
  return (
    <div className="edit_container">
      <div className="edit_content">
        <h2>내 정보 수정</h2>
        {/* 닉네임 입력 필드*/}
        <div className="edit_input">
          <div className="nick">
            <p>닉네임</p>
            <input
              type="text"
              value={inputNick}
              onChange={(e) => setInputNick(e.target.value)}
              className="nickinput"
            />
          </div>
          {/* 저장 버튼 + myinfo 페이지로 이동 */}
          <button className="save_btn" onClick={() => updateMember()}>
            저장
          </button>
        </div>
        {/* 마이페이지로 돌아가는 링크 */}
        <div className="gomypage">
          <Link to="/mypage">마이페이지로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
};

export default MyPageEdit;
