import axios from "axios";

const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const TMDB_API_URL = import.meta.env.VITE_TMDB_API_URL;
console.log("TMDB_ACCESS_TOKEN:", TMDB_ACCESS_TOKEN);
console.log("TMDB_API_URL:", TMDB_API_URL);
const axiosInstance = axios.create({
  baseURL: TMDB_API_URL,
  headers: {
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
});

export const fetchPopularMovies = async (page = 1) => {
  try {
    const res = await axiosInstance.get("/movie/popular", {
      params: {
        page: page,
      },
    });

    return res.data;
  } catch (err) {
    console.log(`fetchPopularMovies : ${err}`);
  }
};
export const fetchMoviesBySearch = async (params) => {
  try {
    console.log(params);
    const res = await axiosInstance.get(`/search/movie?${params}`);
    return res.data;
  } catch (error) {
    console.log(`fetchSearchMovies : ${err}`);
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const res = await axiosInstance.get(`/movie/${id}`);
    return res.data;
  } catch (error) {
    console.log(`fetchSearchMoviesById : ${err}`);
  }
};
