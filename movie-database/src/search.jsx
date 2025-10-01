import React from "react";

export default function Search({ className }) {
  return (
    <div>
      <input type="text" placeholder="Search movies..." className={className} />
    </div>
  );
}
