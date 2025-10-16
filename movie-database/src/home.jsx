import { useState, useEffect } from "react";
import { getMovies } from "./api/tmdb.jsx";
import Button from "./components/common/button.jsx";
import Banner from "./components/common/banner.jsx";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageVisible, setPageVisible] = useState(false);

  const navigate = useNavigate();

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
          <p className="text-center text-gray-700">Loading movies...</p>
        ) : (
          <div className="flex flex-wrap mx-4  justify-center sm:justify-start">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="my-2 mx-2 md:max-w-45 max-w-38 relative cursor-pointer"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <div to={`/movie/${movie.id}`} className="relative group">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                    alt={movie.title}
                    width={200}
                    height={250}
                    className="object-fill shadow-lg rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-movie.jpg";
                    }}
                  />
                  <p className="absolute top-2 right-2 flex items-center gap-1 bg-black bg-opacity-70 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    {movie.vote_average.toFixed(1) || "9"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25l2.955 6.066 6.695.974-4.845 4.72 1.144 6.665L12 17.77l-6.0
                      3.18 1.145-6.665-4.845-4.72 6.695-.974L12 2.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                  <div className="absolute  bg-black/50 rounded-lg inset-0 hidden group-hover:flex items-center justify-center">
                    <Button
                      to={`/movie/${movie.id}`}
                      className="bg-gradient-to-r from-primary to-primary-light text-white p-3 rounded-lg font-bold"
                      title="View details"
                    />
                  </div>
                </div>
                <h2 className="font-bold text-gray-700 mt-3 truncate overflow-hidden whitespace-nowrap">
                  {movie.title}
                </h2>
                <div className="flex gap-2 text-xs text-gray-600 font-medium items-center mt-1">
                  <p>{movie.release_date?.slice(0, 4)}</p>
                  <p>-</p>
                  <p>{movie.original_language} </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 hover:bg-primary transition shadow-lg bg-gradient-to-r from-primary to-primary-light text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-600 font-semibold">
            Page {currentPage}
          </span>
          <Button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={!hasNext}
            className="px-4 py-2 hover:bg-primary transition shadow-lg bg-gradient-to-r from-primary to-primary-light text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            title="Next"
          />
        </div>
      </div>
    </>
  );
}
