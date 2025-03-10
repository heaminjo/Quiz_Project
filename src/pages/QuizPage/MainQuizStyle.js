import styled from "styled-components";

const MainQuizComp = styled.div`
  height: 600px;
  .quiz_inner {
    width: 900px;
    margin: 0 auto;
    padding: 50px 0px;
    text-align: center;
    .quiz_body {
      border: 2px solid #000;
      padding: 50px;
      height: 250px;
    }
    .quiz_ready {
      width: 300px;
      margin: 0 auto;
      padding-top: 50px;
      padding: 20px;
      .description {
        padding: 0;

        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      button {
        width: 250px;
        height: 70px;
        margin-top: 30px;
        font-size: 30px;
        background-color: skyblue;
        border: none;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
      }
      button:hover {
        font-size: 35px;
        background-color: blue;
      }
    }
  }
`;
export default MainQuizComp;
