import React from "react";
import { Link } from "react-router-dom";

export default function Button({ title, className, to, onClick }) {
  return (
    <Link to={to} onClick={onClick} className={className}>
      {title}
    </Link>
  );
}
