import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { QuizContext } from "../../App";
import MemberApi from "../../api/MemberApi";

export default function Register() {
  //컨택스트
  const { joinMember } = useContext(QuizContext);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState(""); //  닉네임 상태 추가
  const [birth, setBirth] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false); //  닉네임 유효성 추가
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

  //  닉네임 입력 핸들러
  const handleNickname = (e) => {
    setNickname(e.target.value);
    setNicknameValid(e.target.value.length >= 2); // 닉네임은 최소 2자 이상
  };

  //  회원가입 버튼 클릭
  const onClickRegisterButton = async () => {
    const rsp = await MemberApi.join(email, pw, nickname, birth);
    const { success, message } = rsp.data;

    if (success) {
      alert("회원가입 성공!");
      navigate("/login");
    } else {
      alert("회원가입 실패");
      navigate("/");
    }
  };

  useEffect(() => {
    setNotAllow(!(emailValid && pwValid && nicknameValid));
  }, [emailValid, pwValid, nicknameValid]);
  // --------------------------------------------------------------
  return (
    <div className="pages">
      <div className="titleWraps">
        회원가입
        <br />
        <br />
      </div>
      <div className="contentWraps">
        <div className="inputTitles">이메일 주소</div>
        <div className="inputWrap">
          <input
            type="text"
            className="inputs"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWraps">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        {/*  닉네임 입력 칸 추가 */}
        <div className="inputTitles" id="nickNameTag">
          닉네임
        </div>
        <div className="inputWrap" style={{ display: "block" }}>
          <input
            type="text"
            className="inputs"
            placeholder="닉네임을 입력하세요"
            value={nickname}
            onChange={handleNickname}
          />
        </div>
        <div className="errorMessageWraps">
          {!nicknameValid && nickname.length > 0 && (
            <div>닉네임은 최소 2자 이상이어야 합니다.</div>
          )}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="inputs"
            placeholder="대문자, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="inputWrap" style={{ display: "block" }}>
          <input
            type="date"
            className="inputs"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>
        <div className="errorMessageWraps">
          {!pwValid && pw.length > 0 && (
            <div>대문자, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
      </div>

      <div className="buttonWrap">
        <div
          onClick={onClickRegisterButton}
          disabled={notAllow}
          className="bottomButtons"
        >
          회원가입
        </div>
      </div>
      <hr nonshade />
      <div className="registerWraps">
        <div className="registerTitles">
          계정이 있으신가요?{" "}
          <Link to="/login">
            <span>로그인 하러가기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
