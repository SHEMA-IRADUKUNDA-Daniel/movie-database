import React from "react";

export default function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies"
        className="w-full rounded-full bg-white text-primary border border-primary placeholder-primary/70 pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
