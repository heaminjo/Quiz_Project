import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import "./App.css";
import Login from "./pages/Login/Login";
import MainQuiz from "./pages/QuizPage/MainQuiz";
import QuizCategory from "./components/Quiz/QuizCategory";
import Myinfo from "./pages/Mypage/MyInfo";
import MyRank from "./pages/Mypage/MyRank";
import Register from "./pages/Join/Register";
import { useRef, useState } from "react";
import RankPage from "./pages/RankPage/RankPage";

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

  const [testData, setTestData] = useState([]); //문제 풀이 데이터

  const idRef = useRef(1);

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
    <>
      <Routes>
        <Route element={<Layout isLogin={isLogin} setIsLogin={setIsLogin} />}>
          <Route path="/" element={<Main />} />
          <Route
            path="/login"
            element={<Login members={members} setIsLogin={setIsLogin} />}
          />
          <Route
            path="/register"
            element={<Register joinMember={joinMember} />}
          />
          <Route
            path="/mainQuiz"
            element={<MainQuiz addTestData={addTestData} />}
          />
          <Route path="/quizCategory" element={<QuizCategory />} />
          <Route path="/myinfo" element={<Myinfo />} />
          <Route path="/myrank" element={<MyRank testData={testData} />} />
          <Route path="/rank" element={<RankPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
//추가할 기능
//1. 문제풀이에서 자동 input 포커싱
//2. enter 누르면 버튼 클릭되도록하기
