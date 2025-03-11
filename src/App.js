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

function App() {
  //로그인 상태
  const [isLogin, setIsLogin] = useState(false);

  // 회원 목록을 저장하는 상태
  const [members, setMembers] = useState([
    { id: 0, email: "jjjjjj", password: "dsdsd" },
  ]);

  const idRef = useRef(members.length);

  // 회원가입 시 members 배열에 사용자 추가하는 함수
  const joinMember = (user) => {
    user.id = idRef.current;
    // setMembers((prevMembers) => [...prevMembers, user]);
    setMembers([user, ...members]);
    idRef.current += 1;
  };
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login members={members} />} />
          <Route
            path="/register"
            element={<Register joinMember={joinMember} />}
          />
          <Route path="/mainQuiz" element={<MainQuiz />} />
          <Route path="/quizCategory" element={<QuizCategory />} />
          <Route path="/myinfo" element={<Myinfo />} />
          <Route path="/myrank" element={<MyRank />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
