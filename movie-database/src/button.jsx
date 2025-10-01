import React from "react";
import { Link } from "react-router-dom";

export default function Button({ title, className, to }) {
  return (
    <Link to={to} className={className}>
      {title}
    </Link>
  );
}
