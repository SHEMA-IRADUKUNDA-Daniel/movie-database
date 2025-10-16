import { useState } from "react";
import { getFavorites, removeFavorite } from "../utils/favorite";
import Button from "./components/common/button";
export default function Favorite() {
  const [favorites, setFavorite] = useState(getFavorites());
  const removeFavorites = (movieId) => {
    removeFavorite(movieId);
    setFavorite(getFavorites());
  };

  if (favorites.length === 0)
    return <p className="text-center p-10">No favorite movies yet.</p>;
  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className={`w-5 h-5 `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <>
      <h2 className=" px-6 max-w-7xl mx-auto  w-full py-5 text-gray-800 text-3xl">
        Favorite movies
      </h2>
      <div className="flex flex-wrap max-w-7xl mx-auto md:px-6 w-full mb-5  justify-center sm:justify-start">
        {favorites.map((movie) => (
          <div
            key={movie.id}
            className="my-2 mx-2 md:max-w-47 max-w-40 relative cursor-pointer"
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  removeFavorites(movie.id);
                }}
                className="absolute top-1 left-1 cursor-pointer z-100 bg-red-400 hover:bg-red-600 text-white p-4 rounded-sm text-center font-bold"
              >
                <CloseIcon className="text-white" />
              </button>
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
    </>
  );
}
