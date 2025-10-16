import { useState, useEffect } from "react";
import { getMovies } from "./api/tmdb.jsx";
import Button from "./components/common/button.jsx";
import Banner from "./components/common/banner.jsx";
import MovieCard from "./components/common/movieCard.jsx";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovies(currentPage);
        setMovies(data.results || []);
        setHasNext(!!data.next);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [currentPage]);
  if (!pageVisible) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Banner />
      <h3 className="max-w-7xl mx-auto md:px-6 w-full px-6 my-5 text-gray-800 text-3xl">
        Movies
      </h3>
      <div className=" flex-1 max-w-7xl mx-auto md:px-6 w-full my-5">
        {loading ? (
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-700">Loading movies...</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap mx-4  justify-center sm:justify-start">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => {
              setLoading(true);
              setCurrentPage((prev) => Math.max(prev - 1, 1));
            }}
            disabled={currentPage === 1}
            className="px-4 py-2 hover:bg-primary transition shadow-lg bg-gradient-to-r from-primary to-primary-light text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-600 font-semibold">
            Page {currentPage}
          </span>
          <Button
            onClick={() => {
              setLoading(true);
              setCurrentPage((prev) => prev + 1);
            }}
            disabled={!hasNext}
            className="px-4 py-2 hover:bg-primary transition shadow-lg bg-gradient-to-r from-primary to-primary-light text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            title="Next"
          />
        </div>
      </div>
    </>
  );
}
