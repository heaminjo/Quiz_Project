import React from "react";
import LoginComp from "./LoginStyle";

export default function Login() {
  return (
    <LoginComp>
      <div>아이디와 비밀번호를 입력하세요.</div>

      <div>
        아이디<input></input>
      </div>

      <div className="error">아이디를 잘못입력하셨습니다.</div>

      <div>
        비밀번호<input></input>
      </div>

      <div className="error">비밀번호가 틀립니다. 다시 입력해주세요</div>

      <div>
        <button>로그인</button>
      </div>

      <div>
        <button className="join">회원가입</button>
      </div>
    </LoginComp>
  );
}
