//점수 목록 아이템
export default function ScoreItem({ scoreItem }) {
  console.log(scoreItem);
  const user = JSON.parse(localStorage.getItem("loginUser"));
  return (
    <tr>
      <td>{scoreItem.id}</td>
      <td>{user.nickname}</td>
      <td>{scoreItem.title}</td>
      <td>{scoreItem.resultNum}</td>
      <td>{scoreItem.testDate}</td>
    </tr>
  );
}
