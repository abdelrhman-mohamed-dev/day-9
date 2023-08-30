import React, { useState, useEffect, useRef } from "react";
import { fetchPopularMovies } from "../utils/api";
import MovieCard from "../components/MovieCard";

const PopularMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const scrollToTopRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsloading(true);
        const data = await fetchPopularMovies(currentPage);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      } finally {
        setIsloading(false);
      }
    };
    fetchMovies();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const renderPageNumbers = () => {
    const maxPageNumbers = 10;
    const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);
    let startPage = Math.max(1, currentPage - halfMaxPageNumbers);
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        className={`px-4 py-2 ${
          currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-gray-300"
        } rounded-md mr-2`}
        onClick={() => {
          handlePageChange(pageNumber);
          scrollToTopRef.current.scrollIntoView();
        }}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className="container mx-auto mt-8">
      <div ref={scrollToTopRef}></div>
      <h1 className="text-3xl text-center text-blue-500 font-semibold mb-8">
        Hottest Picks: Popular Movies Galore
      </h1>
      {isLoading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <div className="flex justify-center items-center my-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={() => {
            handlePageChange(currentPage - 1);
            scrollToTopRef.current.scrollIntoView();
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
          onClick={() => {
            handlePageChange(currentPage + 1);
            scrollToTopRef.current.scrollIntoView();
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularMoviesPage;
