import { useContext, useEffect, useRef, useState } from "react";
import MainQuizComp from "./MainQuizStyle";
import QuizStart from "../../components/Quiz/QuizStart";
import QuizResult from "../../components/Quiz/QuizResult";
import { QuizContext } from "../../App";

import { useNavigate, useParams } from "react-router-dom";
import ScoreApi from "../../api/ScoreApi";
import CategoryApi from "../../api/CategoryApi";
export default function MainQuiz() {
  //선택된 테스트를 가져옴
  const { select } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState([]); //선택 카테고리
  const [selQuiz, setSelQuiz] = useState([]);
  // const [selTitle, setSelTitle] = useState("");

  useEffect(() => {
    //카테고리 정보
    getCategory(select);
    //랜덤 퀴즈즈
    getQuiz(select);
  }, []);

  //카테고리 가져오기
  const getCategory = async (select) => {
    try {
      const rsp = await CategoryApi.selectCategory(select);
      setCategory(rsp.data);
    } catch (e) {
      navigate("/error", { state: e.response.data });
    }
  };

  //문제 가져오기
  const getQuiz = async (select) => {
    try {
      const rsp = await CategoryApi.exemQuiz(select);
      setSelQuiz(rsp.data);
    } catch (e) {
      navigate("/error", { state: e.response.data });
    }
  };

  //퀴즈 스타트 상태 값
  const [isStart, setIsStart] = useState(false);

  return (
    <MainQuizComp>
      <div
        className="quiz_inner"
        // style={{ display: resultModal ? "none" : "block" }}
      >
        {/*결과창 호출시 div영역 숨김 */}
        <h1>{category.name}</h1>
        <div className="quiz_body">
          {isStart ? (
            <QuizStart
              quiz={selQuiz}
              title={category.name}
              setIsStart={setIsStart}
            />
          ) : (
            <div className="quiz_ready">
              <ul className="description">
                <li>문제 개수: {category.categoryId == 0 ? 20 : 10}문항 </li>
                <li>제한 시간: 1분</li>
                <li>답을 채우지 않고 넘어갈 시 오답</li>
              </ul>
              <button onClick={() => setIsStart(true)}>Start!</button>
            </div>
          )}
        </div>
      </div>
    </MainQuizComp>
  );
}
