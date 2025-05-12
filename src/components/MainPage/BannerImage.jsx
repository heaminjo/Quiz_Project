import "./BannerImage.css";
import img1 from "../../image/mainquiz.jpg";
import img2 from "../../image/book.jpg";
import img3 from "../../image/english.jpg";
import img4 from "../../image/science.jpg";
import img5 from "../../image/history.png";
import img6 from "../../image/sports.jpg";
import img7 from "../../image/entertainment.jpg";
import img8 from "../../image/culture.jpg";
import img9 from "../../image/math.png";
import img10 from "../../image/world.jpg";
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
    title: "종합 실전 퀴즈",
    text: `종합 실전 퀴즈입니다.\n당신의 퀴즈 실력을 뽐내보세요! \n(랭킹에 반영됩니다.)`,
    image: img1,
    page: "/mainQuiz/main",
  },
  {
    title: "상식 퀴즈",
    text: "일반 상식 퀴즈입니다.\n상식적으로 문제를 냈어요!",
    image: img2,
    page: "/mainQuiz/commen",
  },
  {
    title: "영어 퀴즈",
    text: "기초 영어 퀴즈입니다.\n이것만 풀면 토익 990점!",
    image: img3,
    page: "/mainQuiz/english",
  },
  {
    title: "과학 퀴즈",
    text: "과학&기술 퀴즈입니다.\n신비한 과학의 세계로!",
    image: img4,
    page: "/mainQuiz/science",
  },
  {
    title: "역사 퀴즈",
    text: "역사 & 문화 퀴즈입니다.\n과거로 돌아간 듯한 기분을 느껴보세요!",
    image: img5,
    page: "/mainQuiz/history",
  },
  {
    title: "스포츠 퀴즈",
    text: "스포츠 & 레저 퀴즈입니다.\n스포츠 만능이 되고싶은 당신을 위한 퀴즈!",
    image: img6,
    page: "/mainQuiz/sports",
  },
  {
    title: "엔터테인먼트 퀴즈",
    text: "엔터테인먼트 퀴즈입니다.\nTV속에 들어온 듯한 몰입감!",
    image: img7,
    page: "/mainQuiz/entertainment",
  },
  {
    title: "문학 & 철학 퀴즈",
    text: "문학 & 철학 퀴즈입니다.\n책 좋아하신가요? 다독가인 당신을 위한 퀴즈!",
    image: img8,
    page: "/mainQuiz/literature",
  },
  {
    title: "수학 퀴즈",
    text: "수학 & 논리 퀴즈입니다.\n다양한 사고력을 위한 퀴즈!\nIQ를 올려봅시다!",
    image: img9,
    page: "/mainQuiz/math",
  },
  {
    title: "세계지리 퀴즈",
    text: "세계 여행 & 지리 퀴즈입니다.\n여행 좋아하는 당신!\n다양한 나라의 역사도 섭렵할 수 있을까요?",
    image: img10,
    page: "/mainQuiz/world",
  },
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
        <p
          className="TextAreaClass"
          key={randomData}
          style={{ whiteSpace: "pre-line" }}
        >
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
