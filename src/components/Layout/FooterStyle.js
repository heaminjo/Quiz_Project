import styled from "styled-components";

const FooterComp = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #2e2e2e;
  position: absoulte;
  bottom: 0;
  .Footer_main {
    padding-left: 10px;
  }
  .Footer_innerH1 {
    color: #fff;
    font-size: 2.5em;
    text-align: left;
  }
  .Footer_innerPre {
    color: darkgray;
    font-weight: 900;
  }
  .Footer_innerPre hr {
    width: 90%;
    background: darkgray;
    height: 1px;
    border: 0;
  }
`;
export default FooterComp;
