import { useEffect, useRef, useState } from "react";
import QuizStartComp from "./QuizStartStyle";
import { useNavigate } from "react-router-dom";
import QuizResult from "./QuizResult";
import QuizList from "./QuizList";
//퀴즈 풀기 컴포넌트
export default function QuizStart({ quiz, title, setIsStart, resultPrint }) {
  const navigate = useNavigate();

  //상태 변수 관리
  const [round, setRound] = useState(1); //라운드드
  const [selQ, setSelQ] = useState([{ quizNum: 0 }]); //현재 문제제
  const resultQuiz = useRef([]); //맞힌 퀴즈 배열
  const [inputResult, setInputResult] = useState(""); //정답 입력창
  const [time, setTime] = useState(60);

  //타이머머
  useEffect(() => {
    //시간이 모두 소모 될 시 게임 종료 후 결과 반환
    if (time <= 0) {
      alert("시간 오버");
      setIsStart(false);
      resultPrint(resultQuiz);
    }

    //1초마다 time의 값이 1씩 줄어들게 한다,
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    //게임창을 도충에 끌 경우 타이머 비움
    return () => clearInterval(timer);
  }, [time]); //time 의존

  //----------------------------------------------------------------------------
  //라운드가 바뀔때마다 새로운 난수를 생성해 문제를 업데이트한다.
  useEffect(() => {
    //만약에 라운드가 20이상이라면
    //게임 상태를 종료하고 결과 리스트를 전달하며 결과창으로 이동동
    if (round > quiz.length) {
      console.log(resultQuiz.current);
      setRound(0);
      setIsStart(false);
      navigate("/result", { state: { list: resultQuiz.current } });
    }

    //다음 문제를 set
    setSelQ(quiz[round - 1]);
  }, [round]);
  // --------------------------------------------------------------------------

  //버튼을 누르면 정답 체크
  const resultCheck = () => {
    //만약 현재 문제와 입력한 정답이 일치하다면
    if (selQ.result == inputResult) {
      //정답 배열에 넣을 때 문제 번호 칼람을 추가 하여 round를 넣어 전달
      resultQuiz.current.push({ ...selQ, quizNum: round });
    }
    //다음 라운드
    setInputResult(""); //값 비워주기
    setRound(round + 1); //라운드 상승
  };

  return (
    <QuizStartComp>
      <span>{time}</span>
      <h1>문제 {round}</h1>
      <p>{selQ.question}</p>
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
