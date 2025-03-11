import { useNavigate } from "react-router-dom";

export default function Myinfo() {
  const navigate = useNavigate();

  return (
    <>
      <h1>내 정보 조회 입니다.</h1>
      <p onClick={() => navigate("/myrank")}>내 순위</p>
    </>
  );
}
