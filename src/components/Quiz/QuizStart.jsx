import { useEffect, useState } from "react";
import QuizStartComp from "./QuizStartStyle";

export default function QuizStart({ quiz }) {
  console.log("quiz시작 컴포넌트트");
  //난수 생성
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  //문항 수
  const [round, setRound] = useState(1);
  const [selQuiz, setSelQuiz] = useState([]);

  //라운드가 바뀔때마다 새로운 난수를 생성해 문제를 업데이트한다.
  useEffect(() => {
    //난수 받기
    const randomNum = getRandom(1, 10);

    //해당 번호의 문제를 find로 가져온다.
    const sel = quiz.find((m) => m.id == randomNum);
    console.log(`뽑힌 문제 번호호: ${sel.id}`);

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
