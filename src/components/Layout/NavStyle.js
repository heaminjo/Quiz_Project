import styled from "styled-components";

const NavComp = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #ddd;
  .nav_inner {
    width: 1200px;
    margin: 0 auto;
    .nav_menu {
      margin: 0;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      li {
        width: 100%;
        text-align: center;
        cursor: pointer;
      }
      li:hover {
        background-color: #bbb;
        font-size: 1.2em;
      }
    }
  }
`;
export default NavComp;
