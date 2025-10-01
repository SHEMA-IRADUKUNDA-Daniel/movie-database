import React from "react";

export default function Search({ className, onChange, value }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className={className}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
