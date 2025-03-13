import styled from "styled-components";

const MainQuizComp = styled.div`
  height: 600px;
  background-color: #ff9464;
  .quiz_inner {
    width: 900px;
    margin: 0 auto;
    padding: 50px 0px;
    text-align: center;
    > h1 {
      color: #fff;
      text-shadow: 3px 3px 2px #000;
    }
    .quiz_body {
      padding: 50px;
      height: 270px;
      background-color: #fff;
      border-radius: 30px;
      box-shadow: 5px 5px 5px #000;
    }
    .quiz_ready {
      width: 300px;
      margin: 0 auto;
      padding-top: 50px;
      padding: 20px;
      .description {
        padding: 0;
        font-weight: bold;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      button {
        width: 250px;
        height: 70px;
        margin-top: 30px;
        font-size: 30px;
        background-color: #ffe7d4;
        border: none;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 2px 2px 4px #000;
      }
      button:hover {
        background-color: rgb(247, 208, 176);
        box-shadow: 1px 1px 3px#000;
        margin-left: 5px;
      }
    }
  }
`;
export default MainQuizComp;
