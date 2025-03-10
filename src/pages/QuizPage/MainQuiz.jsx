import { useRef, useState } from "react";
import MainQuizComp from "./MainQuizStyle";
import QuizStart from "../../components/Quiz/QuizStart";
import QuizResult from "../../components/Quiz/QuizResult";

export default function MainQuiz() {
  //퀴즈 데이터
  const quiz = [
    { id: 1, question: "강아지는 영어로?", result: "dog" },
    { id: 2, question: "고양이는 영어로?", result: "cat" },
    { id: 3, question: "바나나는 영어로?", result: "banana" },
    { id: 4, question: "사과는 영어로?", result: "apple" },
    { id: 5, question: "새는 영어로?", result: "bird" },
    { id: 6, question: "엄마는 영어로?", result: "mather" },
    { id: 7, question: "아빠는 영어로?", result: "father" },
    { id: 8, question: "친구는 영어로?", result: "friend" },
    { id: 9, question: "키위는 영어로?", result: "kiwi" },
    { id: 10, question: "언니는 영어로?", result: "sister" },
  ];

  //퀴즈 스타트 상태 값
  const [isStart, setIsStart] = useState(false);
  //결과창 상태 값
  const [resultModal, setResultModal] = useState(false);
  const result = useRef([]);

  //결과 출력 함수
  const resultPrint = (resultData) => {
    console.log(resultData);
    //함수로 전달 받은 결과 저장
    result.current.push(resultData);
    console.log("ref에 저장" + result.current);
    //결과 모달 상태값
    setResultModal(true);
  };

  return (
    <MainQuizComp>
      <div className="quiz_inner">
        <h1>실전 퀴즈문제</h1>
        <div className="quiz_body">
          {isStart ? (
            <QuizStart
              quiz={quiz}
              setIsStart={setIsStart}
              setResultModal={setResultModal}
              resultPrint={resultPrint}
            />
          ) : (
            <div className="quiz_ready">
              <ul className="description">
                <li>문제 개수: 10문항 </li>
                <li>제한 시간: 3분</li>
                <li>답을 채우지 않고 넘어갈 시 오답</li>
              </ul>
              <button onClick={() => setIsStart(true)}>Start!</button>
            </div>
          )}
          {/* 결과창 결과 데이터를 가지고 호출*/}
          {resultModal && <QuizResult result={result} />}
        </div>
      </div>
    </MainQuizComp>
  );
}
