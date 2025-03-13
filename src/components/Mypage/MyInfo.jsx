import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MyRankStyle";
import "./MyInfoStyle.css";
import profile from "../../image/kkk.gif";
import { QuizContext } from "../../App";

export default function Myinfo() {
  const navigate = useNavigate();
  const { loginUser } = useContext(QuizContext);
  return (
    <div className="info_container">
      {/* 오른쪽 메인 컨텐츠 영역 */}
      <div className="info_content">
        <h2 className="user_info">회원 정보</h2>
        <div className="user_data">
          <div className="userImage">
            <img src={profile} alt="" />
          </div>

          <div className="user userName">
            <p>{loginUser.nickname}</p>
          </div>
          <div className="user userEmail">
            <p>{loginUser.email}</p>
          </div>
        </div>
        <div className="modify">
          <Link to="/myedit">내정보 수정</Link>
        </div>
      </div>
    </div>
  );
}
