import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register({ joinMember }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();

  // 이메일 유효성 검사 포함함
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(emailRegex.test(e.target.value));
  };
  // 패스워드 유효성 검사 포함
  const handlePw = (e) => {
    setPw(e.target.value);
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~`\-=|\\]).{8,}$/;
    setPwValid(passwordRegex.test(e.target.value));
  };

  // 회원 가입 버튼 클릭릭
  const onClickRegisterButton = () => {
    //이메일과 비밀번호 유효성이 맞다면
    if (emailValid && pwValid) {
      const newUser = { email: email, password: pw };
      joinMember(newUser);

      alert(`회원가입 성공!!\n이메일: ${email}`);
      navigate("/login");
    } else {
      alert("이메일 또는 비밀번호를 올바르게 입력해주세요.");
    }
  };

  useEffect(() => {
    setNotAllow(!(emailValid && pwValid));
  }, [emailValid, pwValid]);

  // --------------------------------------------------------------
  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요.
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

        <div style={{ marginTop: "26px" }} className="inputTitle">
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
          onClick={onClickRegisterButton}
          disabled={notAllow}
          className="bottomButton"
        >
          회원가입
        </button>
      </div>
      <hr nonshade />
      <div className="registerWrap">
        <div className="registerTitle">
          계정이 있으신가요?<Link to="/login">로그인 하러가기</Link>
        </div>
      </div>
    </div>
  );
}
