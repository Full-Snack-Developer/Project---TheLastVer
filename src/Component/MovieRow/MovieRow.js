import React, { useEffect, useState } from "react";
import axios from "axios";
import "../MovieRow/MovieRow.css";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";

function MovieRow(props) {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // State để lưu trữ phim được chọn

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b5103ff5c4edd5ebef52acfa7e60aeac&language=en-US&page=1"
      )
      .then((res) => {
        setMovieList(res.data.results);
      });
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); // Cập nhật state với phim được chọn
  };

  const handleClose = () => {
    setSelectedMovie(null); // Reset state phim được chọn khi đóng modal
  };

  return (
    <div className="MoviesRowContaint">
      <div className="originalsFilm">
        <h1 className="heading">PhimFly Originals</h1>
        <div className="MovieSlider">
          {movieList.slice(0, 10).map((movie) => (
            <div key={movie.id} className="movieItem">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
                onClick={() => handleMovieClick(movie)} // Sử dụng handleMovieClick để xử lý sự kiện click vào ảnh
              />
              <div className="movieName">{movie.title}</div>
            </div>
          ))}
        </div>
      </div>
      {selectedMovie && (
        <Modal variant="dark" show={true} onHide={handleClose}>
          <Modal.Header closeButton>
            <ModalTitle>
              Name: {selectedMovie && selectedMovie.title}
            </ModalTitle>
          </Modal.Header>
          <ModalBody>
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`}
            />
            {/* <h3>Film name: {selectedMovie.title}</h3> */}
            <h4>Vote: {selectedMovie.vote_average}</h4>
            <h5>Release date: {selectedMovie.release_date}</h5>
            <br></br>
            <h6>Overview</h6>
            <p>{selectedMovie.overview}</p>
          </ModalBody>
          {/* <Modal.Footer>
            <button
              variant="secondary"
              className="btn btn-secondary mx-auto"
              onClick={handleClose}
            >
              Close
            </button>
          </Modal.Footer> */}
        </Modal>
      )}
    </div>
  );
}

export default MovieRow;
