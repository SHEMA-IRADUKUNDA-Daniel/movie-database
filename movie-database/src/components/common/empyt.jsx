import React from "react";
import EmptyImage from "../../assets/empty.svg";
import { Link } from "react-router-dom";
export default function EmptyState({ onAddClick }) {
  return (
    <div className="flex flex-col items-center my-5 justify-center text-center text-gray-700 px-4">
      <img
        src={EmptyImage}
        alt="Empty state"
        className="w-64 mb-6 opacity-90"
      />
      <h3 className="font-dramatic text-3xl md:text-4xl mb-4 tracking-wide  bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
        Are you sure you saved your favorite movies yet?
      </h3>
      <p className="text-lg md:text-xl mb-6 text-gray-500 max-w-md">
        Your list is empty. Start adding your favorite movies to see them here.
      </p>
      <Link
        to="/home"
        className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-full hover:bg-primary/80 transition font-semibold text-lg"
      >
        Add Favorites Movies
      </Link>
    </div>
  );
}
