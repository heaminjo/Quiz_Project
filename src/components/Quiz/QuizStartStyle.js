import styled from "styled-components";

const QuizStartComp = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    margin: 0;
    color: black;
  }
  p {
    margin-top: 50px;
    font-size: 30px;
  }
  .quiz_bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    input {
      width: 200px;
      height: 30px;
    }
    button {
      width: 250px;
      height: 60px;
      background-color: #f9f871;
      cursor: pointer;
      box-shadow: 2px 2px 2px #000;
      font-weight: bold;
      font-size: 18px;
    }
    button:hover {
      background-color: rgb(241, 241, 110);
      font-size: 15px;
    }
  }
`;
export default QuizStartComp;
