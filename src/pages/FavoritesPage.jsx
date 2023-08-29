// pages/FavoritesPage.js
import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Favorite Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
