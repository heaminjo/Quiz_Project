//점수 목록 아이템
export default function ScoreItem({ scoreItem, number }) {
  console.log(scoreItem);
  const user = JSON.parse(localStorage.getItem("loginUser"));
  return (
    <tr>
      <td>{number + 1}</td>
      <td>{scoreItem.member.name}</td>
      <td>{scoreItem.category.name}</td>
      <td>{scoreItem.resultNum}</td>
      <td>{scoreItem.regDate}</td>
    </tr>
  );
}
