import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./MyPageStyle.css";
import SideMenu from "../../components/Mypage/SideMenu";

const MyPage = ({ setIsLogin }) => {
  return (
    <div className="mypage-container">
      {/* 왼쪽 메뉴 영역 */}
      <SideMenu setIsLogin={setIsLogin} />
      {/* 오른쪽 메인 컨텐츠 영역 */}
      <Outlet />
    </div>
  );
};

export default MyPage;
