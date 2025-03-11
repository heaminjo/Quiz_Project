import { useEffect, useState } from "react";
import ScoreItem from "../../components/Mypage/ScoreItem";

export default function MyRank({ testData }) {
  const [myTestData, setMyTestData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loginUser"));

    console.log("유저 찾아옴" + user.id);
    console.log("테스트 기록들" + testData);
    //유저 아이디와 테스트 기록 아이디와 일치하는것을 찾아 배열로 저장장
    setMyTestData(testData.filter((data) => data.memberId == user.id));
    console.log("로그인된 기록" + myTestData);
  }, []);

  return (
    <>
      <div className="rank_inner">
        <h2>Test List</h2>
        <ul>
          {myTestData.map((item) => (
            <ScoreItem scoreItem={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
