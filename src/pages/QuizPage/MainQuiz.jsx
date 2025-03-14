import { useContext, useEffect, useRef, useState } from "react";
import MainQuizComp from "./MainQuizStyle";
import QuizStart from "../../components/Quiz/QuizStart";
import QuizResult from "../../components/Quiz/QuizResult";
import { QuizContext } from "../../App";
import {
  Mainquiz,
  Cquiz,
  Equiz,
  Squiz,
  Hquiz,
  SPquiz,
  ENquiz,
  Lquiz,
  Mquiz,
  Wquiz,
} from "../../components/Quiz/QuizList";
import { useParams } from "react-router-dom";
export default function MainQuiz() {
  //선택된 테스트를 가져옴
  const { select } = useParams();
  const [selQuiz, setSelQuiz] = useState([]);
  const [selTitle, setSelTitle] = useState("");
  //선택된 셀렉트의 따라서 퀴즈 저장장
  useEffect(() => {
    console.log(Cquiz);
    switch (select) {
      case "main":
        setSelQuiz(Mainquiz);
        setSelTitle("실전 문제");
        break;
      case "commen":
        setSelQuiz(Cquiz);
        setSelTitle("일반 상식 퀴즈");
        break;
      case "english":
        setSelQuiz(Equiz);
        setSelTitle("기초 영어 퀴즈");
        break;
      case "science":
        setSelQuiz(Squiz);
        setSelTitle("과학&기술 퀴즈");
        break;
      case "history":
        setSelQuiz(Hquiz);
        setSelTitle("역사&문화 퀴즈");
        break;
      case "sports":
        setSelQuiz(SPquiz);
        setSelTitle("스포츠&레저 퀴즈");
        break;
      case "entertainment":
        setSelQuiz(ENquiz);
        setSelTitle("엔터테이먼트 퀴즈");
        break;
      case "literature":
        setSelQuiz(Lquiz);
        setSelTitle("문화&철학 퀴즈");
        break;
      case "math":
        setSelQuiz(Mquiz);
        setSelTitle("수학&논리 퀴즈");
        break;
      case "world":
        setSelQuiz(Wquiz);
        setSelTitle("세계 여행&지리 퀴즈");
        break;
      default:
        break;
    }
  }, [select]);

  useEffect(() => {
    console.log(selQuiz.map((item) => item.question));
  }, [selQuiz]);
  const { addTestData } = useContext(QuizContext);

  //퀴즈 스타트 상태 값
  const [isStart, setIsStart] = useState(false);
  //결과창 상태 값
  const [resultModal, setResultModal] = useState(false);
  //결과 데이터
  const result = useRef([]);

  //정답 데이터를 전달받아 저장
  const resultPrint = (resultData) => {
    //함수로 전달 받은 결과 저장
    result.current = resultData.current;
    // console.log(result.current[2].question);  체크 완료

    //결과 모달 상태값
    setResultModal(true);

    const resultPrint = (resultData) => {
      result.current = resultData.current;
      setResultModal(true);
    };
  };

  return (
    <MainQuizComp>
      <div
        className="quiz_inner"
        style={{ display: resultModal ? "none" : "block" }}
      >
        {/*결과창 호출시 div영역 숨김 */}
        <h1>{selTitle}</h1>
        <div className="quiz_body">
          {isStart ? (
            <QuizStart
              quiz={selQuiz}
              title={selTitle}
              setIsStart={setIsStart}
              setResultModal={setResultModal}
              resultPrint={resultPrint}
            />
          ) : (
            <div className="quiz_ready">
              <ul className="description">
                <li>문제 개수: {selTitle == "실전 문제" ? 20 : 10}문항 </li>
                <li>제한 시간: 1분</li>
                <li>답을 채우지 않고 넘어갈 시 오답</li>
              </ul>
              <button onClick={() => setIsStart(true)}>Start!</button>
            </div>
          )}
        </div>
      </div>
      {/* 결과창 결과 데이터를 가지고 호출*/}
      {resultModal && (
        <QuizResult
          result={result}
          title={selTitle}
          addTestData={addTestData}
          setResultModal={setResultModal}
        />
      )}
    </MainQuizComp>
  );
}
