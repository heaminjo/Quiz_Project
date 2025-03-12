import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useContext } from "react";
import { QuizContext } from "../App";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
