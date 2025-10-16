import Button from "./components/common/button";
import { useEffect, useState } from "react";
function App() {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (!pageVisible) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex-1 max-w-7xl mx-auto px-6 w-full">
      <div className="flex flex-col content-center items-center py-4  justify-center">
        <h1 className="text-3xl font-bold text-primary/80 my-6">MovieDB App</h1>

        <h2 className="text-gray-600 text-xl font-semibold my-6">
          Moviedb.com - Your better place to discover movies you’ll love.
        </h2>
        <Button
          to={"/home"}
          title="Go To Home Page"
          className="bg-gradient-to-r from-primary/80 to-primary-light/80 hover:bg-primary/80 text-white font-bold rounded-full shadow-lg px-10 py-3 mb-3 transition"
        />
      </div>
      <h2 className="text-primary/80 mb-3 ">
        MovieDB - Discover Free Movies to Watch Online| moviedb.com
      </h2>
      <p className="text-gray-600 mb-10">
        Cord-cutting is becoming a huge thing these days. People around the
        world are tired of paying the massive bills associated with cable TV and
        the subscriptions of Netflix and other streaming platforms. The good
        news is that sites like Movie App are making cord-cutting possible. They
        offer free movies and TV shows for all people around the world. But as
        you can imagine, things have not been smooth. Movie App and others like
        it have been targeted by relevant authorities for piracy and copyright
        infringement. But nonetheless, they still offer a great streaming
        option.
      </p>
    </div>
  );
}

export default App;
