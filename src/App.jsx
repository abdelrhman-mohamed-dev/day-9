import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import SearchMoviesPage from "./pages/SearchMoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <PopularMoviesPage />,
        },
        {
          path: "/search",
          element: <SearchMoviesPage />,
        },
        {
          path: "/movie/:id",
          element: <MovieDetailPage />,
        },
        {
          path: "/favorites",
          element: <FavoritesPage />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
