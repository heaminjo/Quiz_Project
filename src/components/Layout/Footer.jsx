import FooterComp from "./FooterStyle";

export default function Footer() {
  return (
    <FooterComp>
      <div className="Footer_main">
        <h1 className="Footer_innerH1">Quiz Land</h1>
        <pre className="Footer_innerPre">
          <hr />
          상호명: Quiz Land &nbsp;대표:이승준, 조해민, 김정민, 박민혁, 권혁재{" "}
          <br />
          전화: 010-1234-1234 <br />
          e-mail: greenpc@gmail.com
        </pre>
      </div>
    </FooterComp>
  );
}
