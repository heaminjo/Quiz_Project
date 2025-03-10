import styled from "styled-components";

const ButtonComp = styled.button`
  background-color: ${props.BColor};
  color: ${props.color};
  width: ${props.width};
  height: ${props.height};
`;

export default function Button(props) {
  const { BColor, color, text, width, height } = props;
  return <ButtonComp>{text}</ButtonComp>;
}
