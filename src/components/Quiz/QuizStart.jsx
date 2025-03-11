import { useEffect, useRef, useState } from "react";
import QuizStartComp from "./QuizStartStyle";
import { useNavigate } from "react-router-dom";
import QuizResult from "./QuizResult";

//퀴즈 풀기 컴포넌트
export default function QuizStart({ quiz, setIsStart, resultPrint }) {
  const navigate = useNavigate();

  // console.log("quiz시작 컴포넌트");
  //난수 생성
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  //상태 변수 관리
  const [round, setRound] = useState(1); //문항 수
  const [selQuiz, setSelQuiz] = useState([]); //랜덤 퀴즈
  const resultQuiz = useRef([]); //맞힌 퀴즈 배열
  const [inputResult, setInputResult] = useState("");

  //----------------------------------------------------------------------------
  //라운드가 바뀔때마다 새로운 난수를 생성해 문제를 업데이트한다.
  useEffect(() => {
    //만약에 라운드가 10이상이라면
    //상위 컴포넌트에서 받아온 함수에 맞힌 퀴즈의 데이터를 넣어 호출하고
    //게임 상태를 종료
    if (round > 10) {
      setRound(0);
      // console.log(
      //   "함수 전달 하기전 결과 데이터:" + resultQuiz.current[0].result
      // );
      resultPrint(resultQuiz);
      setIsStart(false);
    }

    //난수 받기
    const randomNum = getRandom(1, 10);

    //해당 번호의 문제를 find로 가져온다.
    const sel = quiz.find((m) => m.id == randomNum);
    // console.log(`뽑힌 문제 번호: ${sel.id}`);

    setSelQuiz(sel);
  }, [round]);
  //--------------------------------------------------------------------------

  //버튼을 누르면 정답 체크
  const resultCheck = () => {
    //만약 현재 문제와 입력한 정답이 일치하다면
    if (selQuiz.result == inputResult) {
      console.log("정답!" + selQuiz.result); //완료
      resultQuiz.current.push(selQuiz);
      console.log("배열에 정답 저장 " + resultQuiz.current[0].result); //완료
    }
    //다음 라운드
    setInputResult("");
    setRound(round + 1);
  };

  return (
    <QuizStartComp>
      <h1>문제 {round}</h1>
      <p>{selQuiz.question}</p>
      <div className="quiz_bottom">
        <input
          type="text"
          placeholder="정답 입력"
          value={inputResult}
          onChange={(e) => setInputResult(e.target.value)}
        />
        <button onClick={() => resultCheck()}>다음 문제</button>
      </div>
    </QuizStartComp>
  );
}
