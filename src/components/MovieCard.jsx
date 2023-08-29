import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, overview } = movie;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((fav) => fav.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(movie));
    }
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
        <button onClick={handleFavoriteClick} className="mt-2 px-4 py-2">
          <FaHeart
            className={` ${
              isFavorite ? "text-red-500" : "text-gray-700"
            } w-6 h-6 rounded-md `}
          />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
