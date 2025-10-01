import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";
export default function NavBar() {
  return (
    <nav className=" flex justify-around px-6 content-center items-center bg-gradient-to-r from-primary to-primary-light h-[131px] shadow-black">
      <h1 className="text-white font-bold text-2xl ">MovieDB</h1>
      <ul className="text-white  font-bold flex justify-between gap-20">
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>Favorite</Link>
        <Link to={"/login"}>Login</Link>
      </ul>
      <Search />
    </nav>
  );
}
