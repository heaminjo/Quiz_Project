import React, { useContext, useEffect, useState } from "react";
import LoginComp from "./LoginStyle";
import { Link, useNavigate } from "react-router-dom";
import { QuizContext } from "../../App";

export default function Login() {
  //컨텍스트
  const { members, setLoginUser, setIsLogin } = useContext(QuizContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true); // ✅ 로그인 버튼 활성화 상태

  //이메일 유효성
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    setEmailValid(emailRegex.test(e.target.value));
  };
  // 비밀번호호 유효성
  const handlePw = (e) => {
    setPw(e.target.value);
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~`\-=|\\]).{8,}$/;
    setPwValid(passwordRegex.test(e.target.value));
  };

  // ✅ 로그인 버튼 상태 업데이트 추가
  useEffect(() => {
    setNotAllow(!(emailValid && pwValid)); // 이메일 & 비밀번호가 유효하면 버튼 활성화
  }, [emailValid, pwValid]);

  //로그인 버튼 클릭
  const onClickConfirmButton = () => {
    //로그인 버튼 클릭 시 정보와 일치하는 회원을 찾아 user에 저장
    const user = members.find(
      (member) => member.email === email && member.password === pw
    );

    if (user) {
      alert(`로그인 성공!!\n이메일: ${email}`);
      setIsLogin(true);
      setLoginUser(user);
      navigate("/");
    } else {
      alert("등록되지 않은 회원이거나 잘못 입력하셨습니다.");
    }
    localStorage.setItem("loginUser", JSON.stringify(user));
  };
  return (
    <div className="page">
      <div className="titleWrap">
        <h2>로그인</h2>
      </div>
      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <div className="inputTitle" style={{ marginTop: "26px" }}>
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="대문자영문, 숫자, 특수문자 포함 8자 이상 입력해주세요"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>대문자영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
      </div>

      <div className="buttonWrap">
        <button
          onClick={onClickConfirmButton}
          disabled={notAllow}
          className="bottomButton"
        >
          로그인
        </button>
      </div>
      <hr />
      <div className="registerWrap">
        <div className="registerTitle">
          계정이 없으신가요? <Link to="/register">가입하기</Link>
        </div>
      </div>
    </div>
  );
}
