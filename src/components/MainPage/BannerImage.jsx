import "./BannerImage.css";
import img1 from "../../image/book1.jpg";
import img2 from "../../image/book2.jpg";
import img3 from "../../image/book3.jpg";
import img4 from "../../image/book4.jpg";
import img5 from "../../image/book5.jpg";
import img6 from "../../image/book6.jpg";
import img7 from "../../image/book7.jpg";
import img8 from "../../image/book8.jpg";
import img9 from "../../image/book9.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

const TextSlide = [
  {
    title: "상식퀴즈",
    text: "상식퀴즈 입니다!",
    image: img1,
    page: "https://www.naver.com",
  },
  { title: "영어퀴즈", text: "영어퀴즈 입니다!", image: img2 },
  { title: "3", text: "3번 문제!", image: img3 },
  { title: "4", text: "4번 문제!", image: img4 },
  { title: "5", text: "5번 문제!", image: img5 },
  { title: "6", text: "6번 문제!", image: img6 },
  { title: "7", text: "7번 문제!", image: img7 },
  { title: "8", text: "8번 문제!", image: img8 },
  { title: "9", text: "9번 문제!", image: img9 },
];

const BannerImage = ({ isLogin }) => {
  const [currentIndex, setCurrentIndex] = useState(0); //Swiper 상태변수
  const [randomData, setRandomData] = useState(Math.random());
  //=> TextArea를 Swiper가 동작할때마다 리렌더링 할 상태변수

  return (
    <div>
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
        <NavLink to={TextSlide[currentIndex].page}>
          <div id="NavigatePage" className="TextAreaClass" key={randomData}>
            <span>퀴즈 하러 가기 &gt;</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default BannerImage;
