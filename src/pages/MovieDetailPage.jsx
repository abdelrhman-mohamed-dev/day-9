// pages/MovieDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../utils/api";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, overview, release_date, poster_path, genres } = movieDetails;

  return (
    <div className="container mx-auto mt-8 px-4 md:h-screen">
      <div className="flex flex-col lg:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={`${title} Poster`}
          className="w-full lg:w-48 h-72 lg:h-auto object-cover mb-4 lg:mb-0 lg:mr-4"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-500 mb-2">{release_date}</p>
          <p className="mb-4">{overview}</p>
          <div className="mb-4">
            <strong>Genres:</strong>{" "}
            {genres.map((genre) => genre.name).join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
