import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./MyPageStyle.css";
import SideMenu from "../../components/Mypage/SideMenu";
import { QuizContext } from "../../App";

const MyPage = () => {
  //컨텍스트
  const { setIsLogin } = useContext(QuizContext);

  return (
    <div className="mypage-container">
      {/* 왼쪽 메뉴 영역 */}
      <div className="side">
        <SideMenu setIsLogin={setIsLogin} />
      </div>
      <div className="main">
        {/* 오른쪽 메인 컨텐츠 영역 */}
        <Outlet />
      </div>
    </div>
  );
};

export default MyPage;
