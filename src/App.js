import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import "./App.css";
import Login from "./pages/Login/Login";
import MainQuiz from "./pages/QuizPage/MainQuiz";
import QuizCategory from "./components/Quiz/QuizCategory";
// import Myinfo from "./pages/Mypage/MyInfo";
import MyRank from "./components/Mypage/MyRank";
import Register from "./pages/Join/Register";
import React, { useContext, useEffect, useRef, useState } from "react";
import RankPage from "./pages/RankPage/RankPage";
import MyPage from "./pages/Mypage/MyPage";
import Myinfo from "./components/Mypage/MyInfo";
import MyPageEdit from "./components/Mypage/MypageEdit";

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
  const [loginUser, setLoginUser] = useState([]); //로그인 유저

  const [userTestData, setUserTestData] = useState([]); // 유저 테스트 기록
  const [testData, setTestData] = useState([]); //전체 테스트 기록
  const [realTestData, setRealTestData] = useState([]); // 실전 테스트 기록
  const [ranking, setRanking] = useState([]); // 실전 전체 순위
  const idRef = useRef(1);

  // //로그인 유저 정보 확인
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

  //실전 테스트 기록 추가
  const addRealTestData = (test) => {
    setRealTestData([...realTestData, test]);
    console.log(realTestData);
  };

  //전체 테스트 기록 추가
  const addTestData = (test) => {
    setTestData([...testData, test]);
    console.log(testData);
  };

  //새로운 전체 테스트 기록에 데이터가 추가 될 경우 랭킹 변동(내림차순)
  useEffect(() => {
    console.log(testData);
    setRanking([...realTestData].sort((a, b) => b.resultNum - a.resultNum));
  }, [realTestData]);

  return (
    <QuizContext.Provider
      value={{
        isLogin,
        setIsLogin,
        loginUser,
        setLoginUser,
        members,
        setMembers,
        addTestData,
        joinMember,
        testData,
        userTestData,
        setUserTestData,
        ranking,
        setRanking,
        setRealTestData,
        realTestData,
        addRealTestData,
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainQuiz/:select" element={<MainQuiz />} />
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
