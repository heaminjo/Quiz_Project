import styled from "styled-components";

const MyRankComp = styled.div`
  width: 100%;
  .rank_inner {
    display: flex;
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
      height: 400px;
      padding: 20px;
      text-align: center;
      margin-top: 50px;
      border: 1px solid #eee;
      box-shadow: 3px 3px 5px #ccc;
    }
    #max_score {
      font-size: 50px;
    }
    .user_score > img {
      width: 200px;
      height: 150px;
    }
    .user_score p {
      font-weight: bold;
    }
    .user_score span {
      background-color: #ff6666;
      padding: 10px;
      color: #fff;
      font-weight: bold;
      border-radius: 20px;
      cursor: pointer;
      box-shadow: 2px 2px 2px #000;
    }
    .user_score span:hover {
      background-color: rgb(230, 88, 88);
    }
  }
`;
export default MyRankComp;
