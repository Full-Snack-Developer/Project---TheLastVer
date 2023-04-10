import React from "react";
import "../Detail/Detail.css";

function Detail(props) {
  return (
    <div>
      <h1>{props.movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path}`}
        alt={props.movie.title}
      />
      <p>{props.movie.overview}</p>
      {/* Các thông tin khác liên quan đến phim */}
    </div>
  );
}

export default Detail;
