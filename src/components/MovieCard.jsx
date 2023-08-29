import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, overview } = movie;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFavorite = favorites.some((fav) => fav.id === id);
    setIsFavorite(isAlreadyFavorite);
  }, [id]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFavorite = favorites.some((fav) => fav.id === id);

    if (isAlreadyFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const newFavorite = { id, title, poster_path, release_date, overview };
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, newFavorite])
      );
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={`${title} Poster`}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/movie/${id}`} className="text-xl font-semibold">
          {title}
        </Link>
        <p className="text-gray-500 text-sm">{release_date}</p>
        <p className="mt-2 line-clamp-3">
          {overview}
          <span className="ml-1 text-gray-400">...</span>
        </p>
        <button
          onClick={handleFavoriteClick}
          className={`mt-2 ${
            isFavorite ? "bg-red-500" : "bg-green-500"
          } px-4 py-2 rounded-md text-white`}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
