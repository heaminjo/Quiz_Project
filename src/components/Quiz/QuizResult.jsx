import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
import QuizResultComp from "./QuizResultStyle";
//퀴즈 종료 결과 창 컴포넌트
export default function QuizResult({ result, title, setResultModal }) {
  //컨텍스트
  const { addTestData, addRealTestData, testData, loginUser } =
    useContext(QuizContext);
  const location = useLocation();
  const list = location.state?.list || [];

  const [user, setUser] = useState([]);

  const resultRef = useRef(testData.length);

  const navigate = useNavigate();

  const resultPrint = (resultData) => {
    //함수로 전달 받은 결과 저장
    result.current = resultData.current;

    const resultPrint = (resultData) => {
      result.current = resultData.current;
      setResultModal(true);
    };
  };

  useEffect(() => {
    console.log(list);
    // 푼 문제 데이터를 객체로 저장하고 멤버의 기본키를 저장한다.
    const testData = {
      memberId: loginUser.id,
      title: title,
      resultNum: list.length,
    };

    //만약 실전문제라면 실전 테스트 기록에도 저장
    if (title == "실전 문제") {
      addRealTestData(testData);
    }

    addTestData(testData);
  }, []);

  return (
    <QuizResultComp>
      <div className="result_container">
        <h1>종료 결과</h1>
        <div className="endQuiz">
          {list != 0 ? (
            <table align="center">
              <tr>
                <th>정답 문항</th>
                <th>문제</th>
                <th>정답</th>
                <th>카테고리</th>
              </tr>
              {list.map((re) => (
                <tr className="quizResult">
                  <th>{re.quizNum}</th>
                  <td>{re.question}</td>
                  <td> {re.result}</td>
                  <td>{re.category.name}</td>
                </tr>
              ))}
            </table>
          ) : (
            <p id="zeroPoint">빵점입니다.</p>
          )}
        </div>
        <div className="result_bottom">
          <p id="score">
            총점: {list.length}/{title == "실전 문제" ? 20 : 10}
          </p>
          <div className="menu_btn">
            <button
              onClick={() => {
                setResultModal(false);
                {
                  title == "실전 문제"
                    ? navigate("/mainQuiz/main")
                    : navigate("/quizCategory");
                }
              }}
            >
              다시하기
            </button>
            <button onClick={() => navigate("/rank")}>랭크 보기</button>
            <button onClick={() => navigate("/myrank")}>마이 랭크 보기</button>
          </div>
        </div>
      </div>
    </QuizResultComp>
  );
}
