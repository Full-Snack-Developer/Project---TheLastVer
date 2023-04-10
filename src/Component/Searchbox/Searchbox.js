import React, { useState } from "react";
import axios from "axios";
import "../Searchbox/Searchbox.css";

function Searchbox() {
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = async (event) => {
    const searchTerm = event.target.value;
    if (searchTerm === "") {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=b5103ff5c4edd5ebef52acfa7e60aeac&language=en-US&page=1&include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
      setShowDropdown(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDropdownItemClick = (result) => {
    // Xử lý khi người dùng chọn một kết quả từ dropdown
    console.log("Selected result:", result);
    // Đóng dropdown sau khi chọn kết quả
    setShowDropdown(false);
  };

  return (
    <div>
      <div className="mx-2">
        <div className="search-container">
          <input
            className="search"
            type="search"
            // placeholder="Search..."
            onChange={handleSearch}
          />
          {showDropdown && (
            <div className="dropdown-list">
              {searchResults.length === 0 ? (
                <div className="result-item">
                  <h5 className="result-item-title">Nhớ kĩ lại xem...</h5>
                </div>
              ) : (
                searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="result-item"
                    onClick={() => handleDropdownItemClick(result)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${
                        result.poster_path
                          ? result.poster_path
                          : result.backdrop_path
                      }`}
                      alt={result.title || result.name}
                      className="result-item-image"
                    />
                    <div className="result-item-details">
                      <h5 className="result-item-title">
                        {result.title || result.name}
                      </h5>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
