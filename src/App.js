import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import "./App.css";
import Login from "./pages/Login/Login";
import MainQuiz from "./pages/QuizPage/MainQuiz";
import QuizCategory from "./components/Quiz/QuizCategory";
// import Myinfo from "./pages/Mypage/MyInfo";
import MyRank from "./pages/Mypage/MyRank";
import Register from "./pages/Join/Register";
import React, { useContext, useEffect, useRef, useState } from "react";
import RankPage from "./pages/RankPage/RankPage";
import MyPage from "./pages/Mypage/MyPage";
import Myinfo from "./pages/Mypage/MyInfo";
import MyPageEdit from "./pages/Mypage/MypageEdit";

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

  const [userTestData, setUserTestData] = useState([]);

  //로그인 된 유저
  const [loginUser, setLoginUser] = useState([]); //로그인 유저 문제 풀이이 데이터
  const [testData, setTestData] = useState([]); //문제 풀이 데이터
  const idRef = useRef(1);

  // //로그인 유저 정보 확인인
  useEffect(() => {
    console.log("로그인 유저 정보 저장됌", loginUser);
    setUserTestData(testData.filter((data) => data.memberId == loginUser.id));
    console.log("유저 문제 풀이" + userTestData);
  }, [loginUser, testData]);

  // 회원가입 시 members 배열에 사용자 추가하는 함수
  const joinMember = (user) => {
    const newUser = {
      id: idRef.current,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
    };

    setMembers([newUser, ...members]);
    idRef.current += 1;
    console.log(members);
  };

  //테스트 기록 추가
  const addTestData = (test) => {
    setTestData([...testData, test]);
    console.log(testData);
  };

  return (
    <QuizContext.Provider
      value={{
        isLogin,
        setIsLogin,
        loginUser,
        setLoginUser,
        members,
        addTestData,
        joinMember,
        testData,
        userTestData,
        setUserTestData,
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainQuiz" element={<MainQuiz />} />
          <Route path="/quizCategory" element={<QuizCategory />} />
          <Route element={<MyPage />}>
            <Route path="/myinfo" element={<Myinfo />} />
            <Route path="/myrank" element={<MyRank />} />
            <Route path="/myedit" element={<MyPageEdit />} />
          </Route>
          <Route path="/rank" element={<RankPage />} />
        </Route>
      </Routes>
    </QuizContext.Provider>
  );
}

export default App;
//추가할 기능
//1. 문제풀이에서 자동 input 포커싱
//2. enter 누르면 버튼 클릭되도록하기
