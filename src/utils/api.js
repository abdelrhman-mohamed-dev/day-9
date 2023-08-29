import axios from "axios";

const TMDB_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWQ5NmRjZTkzMDhmMTZlOGJkNzhlOWVlMzg4YjhhZiIsInN1YiI6IjY0MTAyYTdiYzM5MGM1MDBhNDY3YTg2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fbb-PnO81YwFAsGot5r4bB8bk67BYsMeyBTjKnbeeZo";
const TMDB_API_URL = "https://api.themoviedb.org/3";
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
