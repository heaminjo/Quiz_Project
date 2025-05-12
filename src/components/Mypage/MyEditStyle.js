import styled from "styled-components";

const MyEditComp = styled.section`
  .container {
    width: 1000px;
    background-color: #fff;
    padding-top: 0px;
    height: 600px;
    h4 {
      text-align: center;
      margin-bottom: 30px;
      margin: 20px 0;
      font-size: 30px;
    }
    .inputBox {
      width: 450px;
      height: 450px;
      border: 1px solid #ccc;
      margin: 0 auto;
      background-color: #eee;
      box-shadow: 3px 3px 3px #aaa;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 20px;
      .userImage {
        display: flex;
        gap: 10px;
        position: relative;
        .imgBox {
          background-color: #fff;
          width: 190px;
          height: 190px;
          margin: 0 auto;
          border-radius: 100%;
          img {
            width: 130px;
            height: 130px;
            margin-top: 30px;
          }
        }
        input {
          display: none;
        }
        span {
          position: absolute;
          bottom: 10px;
          right: 100px;
          width: 80px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: none;
          font-size: 13px;
          background-color: #aaa;
          color: #fff;
          border-radius: 20px;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .userData {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        Input {
          width: 250px;
          height: 30px;
          border-bottom: 1px solid #ccc;
        }
        button {
          width: 300px;
          height: 40px;
          background-color: #ff6666;
          color: #fff;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          cursor: pointer;
        }
        button :hover {
          background-color: rgb(230, 55, 55);
          width: 400px;
        }
      } //userData
    } //inputBox
  } //container
`;
export default MyEditComp;
