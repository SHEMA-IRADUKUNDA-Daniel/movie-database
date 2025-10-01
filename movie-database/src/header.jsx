import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";

export default function NavBar() {
  return (
    <header className=" w-full bg-gradient-to-r from-primary to-primary-light h-[100px] shadow-lg">
      <div className="flex flex-row h-full items-center justify-between px-6  max-w-7xl mx-auto gap-10">
        <h1 className="text-white font-bold text-2xl ">MovieDB</h1>
        <nav className="hidden md:flex flex-1 justify-center  ">
          <ul className="text-white  font-bold flex justify-between gap-20">
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>Favorite</Link>
            <Link to={"/login"}>Login</Link>
          </ul>
        </nav>
        <Search
          className={
            "w-full rounded-full bg-white text-primary border border-primary placeholder-primary/60 px-7 py-2 focus:outline-none focus:ring-2 focus:border-primary-light"
          }
        />
      </div>
    </header>
  );
}
