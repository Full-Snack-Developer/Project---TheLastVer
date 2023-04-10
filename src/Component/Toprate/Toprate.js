import React, { useEffect, useState } from "react";
import "../Toprate/Toprate.css";
import axios from "axios";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap"; // Import thư viện modal từ react-bootstrap
import DayNightToggle from "react-day-and-night-toggle";

function Toprate() {
  const [toprate, setTopRate] = useState([]);
  const [show, setShow] = useState(false); // Thêm state để điều khiển hiển thị modal
  const [selectedMovie, setSelectedMovie] = useState(null); // Thêm state để lưu phim được chọn

  const handleShow = (movie) => {
    // Hàm xử lý hiển thị modal khi click vào phim
    setShow(true);
    setSelectedMovie(movie);
  };
  const handleClose = () => setShow(false); // Hàm xử lý đóng modal

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=b5103ff5c4edd5ebef52acfa7e60aeac&language=en-US&page=1"
      )
      .then((res) => {
        console.log(res);
        setTopRate(res.data.results);
      });
  }, []);

  return (
    <div className="TopRateContaint">
      <div className="toprateFilm">
        <h1 className="toprateHeading">Đánh Giá Cao</h1>
        <div className="TopRateSlider">
          {toprate.slice(0, 10).map((movie) => (
            <div key={movie.id} className="toprateItem">
              <img
                className="toprateimg"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
                onClick={() => handleShow(movie)} // Gọi hàm handleShow khi click vào ảnh phim
              />
              <div className="toprateName">{movie.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Name: {selectedMovie && selectedMovie.title}</ModalTitle>
        </Modal.Header>
        <ModalBody>
          {selectedMovie && (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`}
                alt={selectedMovie.title}
              />
              {/* <h3>{selectedMovie.title}</h3> */}
              <h4>Vote: {selectedMovie.vote_average}</h4>
              <h5>Release date: {selectedMovie.release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{selectedMovie.overview}</p>
            </div>
          )}
        </ModalBody>
        {/* <Modal.Footer>
          <button
            variant="secondary"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default Toprate;
