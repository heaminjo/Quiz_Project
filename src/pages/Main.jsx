import BannerImage from "../components/MainPage/BannerImage";

export default function Main({ isLogin }) {
  return (
    <>
      <BannerImage isLogin={isLogin} />
    </>
  );
}
