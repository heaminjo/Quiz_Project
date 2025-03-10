import styled from "styled-components";

const QuizStartComp = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    margin: 0;
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
      height: 50px;
      background-color: lightblue;
      cursor: pointer;
    }
    button:hover {
      background-color: lightgray;
      font-size: 15px;
    }
  }
`;
export default QuizStartComp;
