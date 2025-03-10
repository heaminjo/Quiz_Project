export default function InputButton(props) {
  const { value, clickEvt } = props;
  return <input type="submit" onClick={clickEvt} value={value} />;
}
