import React from "react";
// import { Routes, Route } from 'react-router-dom'
import Top from "../Component/Top";
import Intro from "../Component/Intro/Intro";
import MovieRow from "../Component/MovieRow/MovieRow";
import Toprate from "../Component/Toprate/Toprate";
import Footer from "../Component/Footer/Footer";
import "../Pages/Home.css";

function Home() {
  return (
    <div>
      <Top />
      <Intro />
      <MovieRow />
      <div className="foo">
        <Toprate />
        {/* Thêm khoảng cách 20px giữa phần Toprate và Footer */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
