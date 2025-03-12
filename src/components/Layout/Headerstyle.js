import styled from "styled-components";

const HeaderComp = styled.header`
  width: 100%;
  height: 130px;
  background-color: #ccc;
  .header_inner {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .header_title {
      position: relative;
      
      h1 {
        width: 150px;
        position: absolute;
        left: 550px;
        cursor: pointer;
      }
    }
    .member_menu {
      display: flex;
      line-height: 80px;
      gap: 10px;
      li {
        list-style: none;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
`;
export default HeaderComp;
