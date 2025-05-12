import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import Login from "./pages/Login/Login";
import MainQuiz from "./pages/QuizPage/MainQuiz";
import QuizCategory from "./components/Quiz/QuizCategory";
import MyRank from "./components/Mypage/MyRank";
import Register from "./pages/Join/Register";
import React, { useContext, useEffect, useRef, useState } from "react";
import RankPage from "./pages/RankPage/RankPage";
import MyPage from "./pages/Mypage/MyPage";
import Myinfo from "./components/Mypage/MyInfo";
import MyPageEdit from "./components/Mypage/MypageEdit";
import Layout from "./pages/Layout";
import NotFound from "./pages/Error";
import QuizResult from "./components/Quiz/QuizResult";
import MemberApi from "./api/MemberApi";

export const QuizContext = React.createContext();

function App() {
  //로그인 상태
  const [isLogin, setIsLogin] = useState(false);
  // 회원 목록을 저장하는 상태
  const [members, setMembers] = useState([
    {
      id: 0,
      email: "test@naver.com",
      password: "Qwer1234!",
      nickname: "테스트용계정",
    },
  ]);
  //로그인 된 유저
  const [loginUser, setLoginUser] = useState(""); //로그인 유저 이름
  // const [ranking, setRanking] = useState([]); // 실전 전체 순위

  // //로그인 유저 정보 확인
  useEffect(() => {
    getUser();
  }, []);

  //유저 정보 불러오기
  const getUser = async () => {
    const id = sessionStorage.getItem("loginID");

    if (id != null) {
      const rsp = await MemberApi.detail(id);
      if (rsp.status == 200) {
        console.log(rsp.data);
        setIsLogin(true);
        setLoginUser(rsp.data.name);
      }
    }
  };

  return (
    <QuizContext.Provider
      value={{
        isLogin,
        setIsLogin,
        loginUser,
        setLoginUser,
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainQuiz/:select" element={<MainQuiz />} />
          <Route path="/quizCategory" element={<QuizCategory />} />
          <Route path="/result" element={<QuizResult />} />
          <Route element={<MyPage />}>
            <Route path="/myinfo" element={<Myinfo />} />
            <Route path="/myrank" element={<MyRank />} />
            <Route path="/myedit" element={<MyPageEdit />} />
            <Route path="/error" element={<NotFound />} />
          </Route>
          <Route path="/rank" element={<RankPage />} />
        </Route>
      </Routes>
    </QuizContext.Provider>
  );
}
export default App;
