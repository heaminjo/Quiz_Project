import "./BannerImage.css";
import img1 from "../../image/book.jpg";
import img2 from "../../image/english.jpg";
import img3 from "../../image/math.png";
import img4 from "../../image/history.png";
import img5 from "../../image/book5.jpg";
import img6 from "../../image/book6.jpg";
import img7 from "../../image/book7.jpg";
import img8 from "../../image/book8.jpg";
import img9 from "../../image/book9.jpg";
import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../App";

const TextSlide = [
  {
    title: "상식퀴즈",
    text: "상식퀴즈 입니다!",
    image: img1,
    page: "/mainQuiz",
  },
  {
    title: "영어퀴즈",
    text: "영어퀴즈 입니다!",
    image: img2,
    page: "/quizCategory",
  },
  { title: "수학퀴즈", text: "수학퀴즈 입니다!", image: img3 },
  { title: "역사퀴즈", text: "역사퀴즈 입니다!", image: img4 },
  { title: "5", text: "5번 문제!", image: img5 },
  { title: "6", text: "6번 문제!", image: img6 },
  { title: "7", text: "7번 문제!", image: img7 },
  { title: "8", text: "8번 문제!", image: img8 },
  { title: "9", text: "9번 문제!", image: img9 },
];

const BannerImage = () => {
  const { isLogin } = useContext(QuizContext);

  const [currentIndex, setCurrentIndex] = useState(0); //Swiper 상태변수
  const [randomData, setRandomData] = useState(Math.random());
  const navigate = useNavigate();
  //=> TextArea를 Swiper가 동작할때마다 리렌더링 할 상태변수

  const loginCheck = (move) => {
    if (isLogin) {
      navigate(move);
    } else {
      alert("로그인이 필요한 서비스입니다");
      navigate("/login");
    }
  };

  return (
    <div id="BannerContainer">
      <div id="ImageArea">
        <Swiper
          id="introSwiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => {
            setRandomData(Math.random());
            setCurrentIndex(swiper.realIndex);
          }}
          //=> 현재 슬라이드 인덱스
        >
          {TextSlide.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={slide.title} id="ImgRound" />
            </SwiperSlide> //key 값으로 Swiper의 상태변수를 주고 map
          ))}
        </Swiper>
      </div>

      <div id="TextArea">
        <h1 className="TextAreaClass" key={currentIndex}>
          {TextSlide[currentIndex].title}
        </h1>
        <p className="TextAreaClass" key={randomData}>
          {TextSlide[currentIndex].text}
        </p>
        <div onClick={() => loginCheck(TextSlide[currentIndex].page)}>
          <div id="NavigatePage" className="TextAreaClass" key={randomData}>
            <span>퀴즈 하러 가기 &gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
