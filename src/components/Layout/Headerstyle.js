import styled from "styled-components";

const HeaderComp = styled.header`
  width: 100%;
  height: 170px;
  /* background-color: #ffeae5; */
  .header_inner {
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .header_title {
      position: relative;

      h1 {
        width: 150px;
        position: absolute;
        left: 480px;
        cursor: pointer;
        img {
          width: 300px;
          height: 100px;
        }
      }
    }
    .member_menu {
      display: flex;
      line-height: 150px;
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
