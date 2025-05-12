import styled from "styled-components";

const QuizResultComp = styled.div`
  width: 100%;
  height: 600px;
  padding-top: 10px;
  background-color: #aaa;
  .result_container {
    width: 900px;
    height: 500px;
    margin: 0 auto;
    position: relative;
    padding-top: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px 5px #ccc;
    h1 {
      text-align: center;
      margin: 0;
    }
    .endQuiz {
      padding: 10px 0;
      width: 600px;
      margin: 0 auto;
      table {
        width: 600px;
        th {
          background-color: #aaa;
        }
        td {
          background-color: #ccc;
          text-align: center;
        }
      }
      #zeroPoint {
        font-size: 40px;
        margin: 0 auto;
        margin-top: 80px;
      }
    }
    .result_bottom {
      margin: 0 auto;
      position: absolute;
      bottom: 10px;
      display: flex;
      gap: 300px;
      #score {
        text-align: center;
        font-size: 40px;
        margin: 5px;
      }
      .menu_btn {
        margin-top: 10px;
        display: flex;
        gap: 10px;
        button {
          padding: 10px 20px;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          background-color: #ff6666;
          color: white;
          transition: all 0.1s ease-in-out;
        }
        button:hover {
          background-color: rgb(198, 76, 76);
          font-size: 20px;
        }
      }
      /* .menu_btn > button:hover {
        background-color: white;
        color: #3f51b5;
        border: 2px solid #3f51b5;
        cursor: pointer;
      } */
    }
  }
`;
export default QuizResultComp;
