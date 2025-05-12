import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const { message, code } = location.state;
  return (
    <>
      <h1>{code}</h1>
      <p>{message}</p>
    </>
  );
}
