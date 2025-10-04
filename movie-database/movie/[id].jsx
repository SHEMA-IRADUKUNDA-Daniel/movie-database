import React from "react";
import { useState, useEffect } from "react";
import { fetchMovie } from "../api/movies";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../button";
export default function Details() {
  const { id } = useParams(); // grabs movie id from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      try {
        const data = await fetchMovie(id);
        setMovie(data);
      } catch (error) {
        console.error("Error loading movie:", error);
      } finally {
        setLoading(false);
      }
    }
    loadMovie();
  }, [id]);

  if (loading) return <p className=" text-center">Loading...</p>;
  if (!movie) return <p className=" text-center">Movie not found</p>;
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative h-72 w-full shadow">
        <img
          src={movie.poster_url}
          alt={movie.title}
          className="object-cover w-full h-full  "
        />
        <div className="absolute inset-0 bg-black/40 px-4 gap:3 md:gap-5 flex flex-row items-center align-center justify-center">
          <h1 className="md:text-3xl text-2xl font-bold mx-4 text-white">
            {movie.title}
          </h1>
          <p className=" flex items-center gap-1  bg-black bg-opacity-20 text-white text-sm font-semibold px-2 py-1 rounded-full ">
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
            {movie.rating || "9"}
          </p>
        </div>
      </div>

      <div className=" flex items-center justify-center py-10 flex-col md:flex-row max-w-5xl mx-auto p-6 md:flex md:gap-10">
        <div className=" mb-6 md:mb-0">
          <Link className="absolute md:hidden hover:bg-primary transition left-6 md:left-6 bg-gradient-to-r from-primary to-primary-light p-2 rounded-full top-30 z-20 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
              className="w-6 h-6 text-gray-800 cursor-pointer hover:text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
        </div>

        <div className="md:w-2/3 space-y-6">
          <div className="space-y-2">
            <p className="mb-10">
              <span className="font-medium text-gray-600 py-2">
                {movie.overview}
              </span>
            </p>

            <p>
              <strong className="text-gray-800">Genre:</strong>
              {""}{" "}
              <span className="text-gray-600">
                {Array.isArray(movie.genres)
                  ? movie.genres.join(", ")
                  : movie.genres}
              </span>
            </p>
            <p>
              <strong className="text-gray-800">Released year:</strong>{" "}
              <span className="text-gray-600">{movie.release_date}</span>
            </p>
            <p>
              <strong className="text-gray-800">Duration:</strong>{" "}
              <span className="text-gray-600">
                {movie.duration_minutes} min
              </span>
            </p>
            <p>
              <strong className="text-gray-800">Casts:</strong>{" "}
              <span className="text-gray-600">
                {Array.isArray(movie.cast) ? movie.cast.join(", ") : movie.cast}
              </span>{" "}
            </p>
          </div>
          <Button
            title="+ Add To Favorite"
            className="bg-gradient-to-r from-primary to-primary-light hover:bg-primary text-white py-3 px-4 rounded-full shadow-lg transition"
          />
        </div>
      </div>
    </div>
  );
}
