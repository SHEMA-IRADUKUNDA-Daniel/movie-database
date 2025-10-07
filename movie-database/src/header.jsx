import { Link } from "react-router-dom";
import Search from "./search";
import { useState } from "react";
import { getMovies } from "./api/tmdb";
import { useEffect } from "react";
export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (search.trim().length > 1) {
        setLoading(true);
        try {
          const data = await getMovies(1, search);
          const filtered = data.results.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          );
          setResults(filtered);
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [search]);
  return (
    <header className=" w-full bg-gradient-to-r from-primary to-primary-light h-[100px] shadow-lg">
      <div className="flex flex-row h-full items-center justify-between px-6  max-w-7xl mx-auto gap-10 relative">
        <Link to={"/"} className="text-white font-bold text-lg md:text-2xl ">
          MovieDB
        </Link>
        <nav className="hidden md:flex flex-1 justify-center  ">
          <ul className="text-white  font-bold flex justify-between gap-20">
            <Link to={"/home"} className="hover:text-white/70 transition">
              Home
            </Link>
            <Link to={"/favorite"} className="hover:text-white/70 transition">
              Favorite
            </Link>
            <Link to={"/login"} className="hover:text-white/70 transition">
              Login
            </Link>
          </ul>
        </nav>
        <Search
          value={search}
          onChange={setSearch}
          className={
            "relative w-full rounded-full bg-white  text-gray-600 border border-primary placeholder-primary/60 px-4 md:px-7 py-2 focus:outline-none  focus:primary-light"
          }
        />
        {search && results.length > 0 && (
          <ul className="absolute top-20 right-5 w-80 bg-white shadow-lg rounded-lg max-h-80 overflow-y-auto z-50">
            {results.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={`/movie/${movie.id}`}
                  onClick={() => {
                    setSearch("");
                    setResults([]);
                  }}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                    alt={movie.title}
                    className="w-10 h-14 object-cover rounded"
                  />
                  <span className="text-gray-800 text-sm font-medium">
                    {movie.title}{" "}
                    <span className="text-gray-500 text-xs">
                      ({movie.release_date?.slice(0, 4)})
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {loading && (
          <div className="absolute top-20 right-5 w-80 z-50 bg-white shadow-md rounded-lg p-4 text-gray-600 text-sm">
            Searching...
          </div>
        )}

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="  md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          {mobileOpen && (
            <div className=" absolute w-80 bg-white/90 z-10 h-184 top-25 right-0">
              <nav className=" py-20 bg-gradient-to-r h-full from-primary to-primary-light   ">
                <ul className="text-white  font-bold flex flex-col justify-between gap-10">
                  <Link to={"/home"}>Home</Link>
                  <Link to={"/favorite"}>Favorite</Link>
                  <Link to={"/login"}>Login</Link>
                </ul>
              </nav>
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
