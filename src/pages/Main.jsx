import { useContext } from "react";
import BannerImage from "../components/MainPage/BannerImage";
import Ranking from "../components/Rank/Ranking";
import QuizCategory from "../components/Quiz/QuizCategory";
import { QuizContext } from "../App";
import "./MainStyle.css";
export default function Main() {
  const { ranking } = useContext(QuizContext);
  return (
    <>
      <div className="bannerContainer">
        <BannerImage />
      </div>
      <div className="rankContainer">
        <Ranking ranking={ranking} />
      </div>
    </>
  );
}
