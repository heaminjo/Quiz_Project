import { useContext, useEffect, useRef, useState } from "react";
import ScoreItem from "./ScoreItem";
import MyRankComp from "./MyRankStyle";
import { QuizContext } from "../../App";
import king from "../../image/king.png";
import { useNavigate } from "react-router-dom";
import ScoreApi from "../../api/ScoreApi";

export default function MyRank() {
  const navigate = useNavigate();

  //페이지
  const [page, setPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState("");

  const [userTestData, setUserTestData] = useState([]);

  //점수가 있는지 확인하는 변수수
  const [isScore, setIsScore] = useState(false);
  const [bestScore, setBestScore] = useState([]);

  //리스트 불러오기
  const getList = async () => {
    const memberId = sessionStorage.getItem("loginID");
    const rsp = await ScoreApi.scoreList(memberId, page, 10, sort, keyword);

    setUserTestData(rsp.data.content);
  };

  //최고 점수 불러오기
  const getBest = async () => {
    const id = sessionStorage.getItem("loginID");
    const rsp = await ScoreApi.bestScore(id);

    if (rsp.status == 200) {
      setIsScore(true);
      setBestScore(rsp.data);
    }
  };
  //데이터 불러오기기
  useEffect(() => {
    getList();
    getBest();
  }, []);

  return (
    <MyRankComp>
      <div className="rank_inner">
        <div className="score_list">
          <h2>Test List</h2>
          <table>
            <tr>
              <th>순번</th>
              <th>닉네임</th>
              <th>문제 유형</th>
              <th>점수</th>
              <th>날짜</th>
            </tr>
            {userTestData.map((scoreItem, index) => (
              <ScoreItem scoreItem={scoreItem} number={index} />
            ))}
          </table>
        </div>
        <div className="user_score">
          <img src={king} alt="" />
          <div className="userData">
            <h2>{bestScore.member?.name}님의 최고 점수</h2>
            {isScore ? (
              <>
                <p id="max_score">{bestScore.resultNum}P</p>
              </>
            ) : (
              <>
                <p>************기록 없음************</p>
                <span onClick={() => navigate("/mainQuiz")}>
                  문제 도전하러 가기
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </MyRankComp>
  );
}
