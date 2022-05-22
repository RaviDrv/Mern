import React, { useState, useEffect, useRef } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "@u-wave/react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const tube = useRef(null);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie);
      movieTrailer(movie.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies ? (
          movies.map((movie) => {
            return (
              <img
                key={movie.id}
                onClick={() => {
                  handleClick(movie);
                }}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.original_title}
              ></img>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      {trailerUrl && (
        <div>
          <YouTube video={trailerUrl} autoplay className="player" ref={tube} />
        </div>
      )}
    </div>
  );
}

export default Row;
