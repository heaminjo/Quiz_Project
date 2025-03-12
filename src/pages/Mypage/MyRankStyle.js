import styled from "styled-components";

const MyRankComp = styled.div`
  width: 100%;
  .rank_inner {
    display: flex;
    height: 500px;

    .score_list {
      width: 700px;
      padding: 30px 50px;
      table {
        width: 700px;
        text-align: center;

        tr {
          height: 50px;
          th {
            background-color: #ccc;
          }
          td {
            background-color: #eee;
          }
        }
      }
    }
    .user_score {
      width: 300px;
      border: 1px solid #000;
    }
  }
`;
export default MyRankComp;
