import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../Pages/MovieCard/MovieCard";
import "../Pages/MovieCard/MovieCard.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Top from "../Component/Top";
import Footer from "../Component/Footer/Footer";
import "../Pages/Trending.css";

function Trending() {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=4257e6f146690bdd6c3422eba2abad6f"
      )
      .then((Response) => {
        setMovie(Response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <Top />
        <div className="grid">
          {movies.map((movie, index) => {
            return <MovieCard key={index} {...movie} />;
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Trending;
