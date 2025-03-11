import { useEffect, useRef, useState } from "react";
import "./QuizResult.css";
//퀴즈 종료 결과 창 컴포넌트
export default function QuizResult({ result, addTestData }) {
  const resultRef = useRef(1);
  // useEffect(() => {
  //   localStorage.setItem("result.current.length", result.current.length);
  // });
  // console.log("결과창" + result.current);

  //user에 결과 데이터 배열 저장
  useEffect(() => {
    //로컬스토리지에서 현재 로그인 된 회원 정보를 가져온다.
    const user = JSON.parse(localStorage.getItem("loginUser"));

    console.log(result.current.length);
    // 푼 문제 데이터를 객체로 저장하고 멤버의 기본키를 저장한다.
    const testData = {
      id: resultRef.current,
      memberId: user.id,
      title: "실전 모의고사",
      testDate: new Date().toLocaleString(),
      resultNum: result.current.length,
    };

    resultRef.current += 1;

    console.log(testData);
    addTestData(testData);

    console.log(user);
  }, []);

  return (
    <>
      <h1>종료 결과</h1>
      <div className="endQuiz">
        {result.current.map((re) => (
          <div className="quizResult">
            <p>
              번호: {re.quizNum} | 문제 내용: {re.question} | 정답 : {re.result}
            </p>
          </div>
        ))}
      </div>
      <p id="score">총점: {result.current.length}/10</p>
    </>
  );
}
