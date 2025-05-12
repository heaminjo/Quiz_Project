import { useContext } from "react";
import BannerImage from "../components/MainPage/BannerImage";
import Ranking from "../components/Rank/Ranking";
import QuizCategory from "../components/Quiz/QuizCategory";
import { QuizContext } from "../App";
import "./MainStyle.css";
export default function Main() {
  return (
    <>
      <div className="bannerContainer">
        <BannerImage />
      </div>
    </>
  );
}
