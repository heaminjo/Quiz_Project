import { useEffect, useRef, useState } from "react";
import QuizStartComp from "./QuizStartStyle";
import { useNavigate } from "react-router-dom";
import QuizResult from "./QuizResult";

//퀴즈 풀기 컴포넌트
export default function QuizStart({ quiz, setIsStart, resultPrint }) {
  const navigate = useNavigate();

  console.log("quiz시작 컴포넌트트");
  //난수 생성
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  //문항 수
  const [round, setRound] = useState(1);
  //랜덤 퀴즈
  const [selQuiz, setSelQuiz] = useState([]);
  //정답 퀴즈
  const resultQuiz = useRef([{ id: 2, content: "dsd", result: "ㄹ" }]);

  //라운드가 바뀔때마다 새로운 난수를 생성해 문제를 업데이트한다.
  useEffect(() => {
    //만약에 라운드가 10이상이라면
    //상위 컴포넌트에서 받아온 함수에 맞힌 퀴즈의 데이터를 넣어 호출하고
    //게임 상태를 종료
    if (round > 10) {
      setRound(0);
      resultPrint(resultQuiz);
      setIsStart(false);
    }

    //난수 받기
    const randomNum = getRandom(1, 10);

    //해당 번호의 문제를 find로 가져온다.
    const sel = quiz.find((m) => m.id == randomNum);
    console.log(`뽑힌 문제 번호: ${sel.id}`);

    setSelQuiz(sel);
  }, [round]);
  const date = quiz.find((m) => m.id == 2);
  return (
    <QuizStartComp>
      <h1>문제 {round}</h1>
      <p>{selQuiz.question}</p>
      <div className="quiz_bottom">
        <input type="text" placeholder="정답 입력" />
        <button onClick={() => setRound(round + 1)}>다음 문제</button>
      </div>
    </QuizStartComp>
  );
}
