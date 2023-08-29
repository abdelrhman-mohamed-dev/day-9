import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchMoviesBySearch, fetchPopularMovies } from "../utils/api";
import MovieCard from "../components/MovieCard";

const languages = [
  { id: "ar-AR", name: "Arabic" },
  { id: "en-US", name: "English" },
];
const SearchMoviesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const params = new URLSearchParams();
    if (title) params.append("query", title);
    if (language) params.append("language", language);
    console.log(params.toString());
    navigate(`/search?${params.toString()}`);

    try {
      const data = await fetchMoviesBySearch(params.toString());
      setMovies(data.results);
    } catch (err) {
      console.error("Error searching movies:", err);
    }
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold mb-2">Search Movies</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            className="border rounded px-2 py-1"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            className="border rounded px-2 py-1"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Select Language</option>=
            {languages.map((language) => (
              <option key={language.id} value={language.id}>
                {language.name}
              </option>
            ))}
          </select>

          <button
            className="bg-blue-500 text-white rounded px-4 py-1"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchMoviesPage;
