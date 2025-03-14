import { useEffect, useRef, useState } from "react";
import QuizStartComp from "./QuizStartStyle";
import { useNavigate } from "react-router-dom";
import QuizResult from "./QuizResult";
import QuizList from "./QuizList";
//퀴즈 풀기 컴포넌트
export default function QuizStart({ quiz, title, setIsStart, resultPrint }) {
  const navigate = useNavigate();
  const leng = useRef(quiz.length); //문제의 개수를 배열에
  const getRandomArray = (array) => {
    //만약 뽑을 랜덤 숫자가 남아있지않다면 null 반환
    if (array === 0) return null;
    //배열의 숫자 길이 만큼 범위의 난수를 생성하는 변수
    const randomIndex = Math.floor(Math.random() * array.length);
    // console.log(randomIndex);
    return array[randomIndex];
  };

  //상태 변수 관리
  const [round, setRound] = useState(1); //문항 수
  const [selQ, setSelQ] = useState([{ quizNum: 0 }]); //랜덤 퀴즈
  const resultQuiz = useRef([]); //맞힌 퀴즈 배열
  const [inputResult, setInputResult] = useState(""); //정답 입력창
  const numbers = useRef(Array.from({ length: 10 }, (_, index) => index + 1)); // 랜덤 숫자
  const [time, setTime] = useState(60);
  const RoundQ = useRef(10);

  //실전과 연습에 따라 문제 범위 길이 조절
  useEffect(() => {
    console.log(title);
    if (title === "실전 문제") {
      console.log(title);
      numbers.current = Array.from({ length: 90 }, (_, index) => index + 1);
      RoundQ.current = 20;
    }
  }, []);

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
    //상위 컴포넌트에서 받아온 함수에 맞힌 퀴즈의 데이터를 넣어 호출하고
    //게임 상태를 종료
    if (round > RoundQ.current) {
      resultPrint(resultQuiz);
      setRound(0);
      setIsStart(false);
    }

    //난수 받기
    const randomNum = getRandomArray(numbers.current);
    console.log(randomNum);

    //중복방지를 위해 뽑힌 숫자는 배열에서 제외외
    numbers.current = numbers.current.filter((num) => num != randomNum);
    console.log(numbers.current);

    const sel = quiz.find((m) => m.id == randomNum);
    setSelQ(sel);
  }, [round]);
  //--------------------------------------------------------------------------

  //버튼을 누르면 정답 체크
  const resultCheck = () => {
    //만약 현재 문제와 입력한 정답이 일치하다면
    if (selQ.result == inputResult) {
      //console.log("정답!" + selQuiz.result); 완료

      //정답 배열에 넣을 때 문제 번호 칼람을 추가 하여 round를 넣어 전달
      resultQuiz.current.push({ ...selQ, quizNum: round });
      // console.log("배열에 정답 저장 " + resultQuiz.current[0].quizNum); //완료
    }
    //다음 라운드
    setInputResult("");
    setRound(round + 1);
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
