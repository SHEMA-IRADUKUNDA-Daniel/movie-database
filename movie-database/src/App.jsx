import NavBar from "./header";
import Search from "./search";
import Button from "./button";
import Footer from "./footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 max-w-7xl mx-auto px-6 w-full">
        <div>
          <div className="flex flex-col content-center items-center py-4  justify-center">
            <h1 className="text-3xl font-bold text-primary/80 my-6">
              MovieDB App
            </h1>
            <Search
              className={
                "w-full md:w-[459px] shadow rounded-full bg-white text-gray-600 border border-primary-light placeholder-primary/60 px-7 py-2 focus:outline-none  focus:primary-light"
              }
            />
            <h2 className="text-gray-600 text-xl font-semibold my-6">
              Moviedb.com - Your better place to discover movies you’ll love.
            </h2>
            <Button
              to={"/home"}
              title="Go To Home Page"
              className="bg-gradient-to-r from-primary/80 to-primary-light/80 text-white font-bold rounded-full shadow-lg px-10 py-3 mb-3"
            />
          </div>
          <h2 className="text-primary/80 mb-3 ">
            MovieDB - Discover Free Movies to Watch Online| movieapp.com
          </h2>
          <p className="text-gray-600 mb-10">
            Cord-cutting is becoming a huge thing these days. People around the
            world are tired of paying the massive bills associated with cable TV
            and the subscriptions of Netflix and other streaming platforms. The
            good news is that sites like Movie App are making cord-cutting
            possible. They offer free movies and TV shows for all people around
            the world. But as you can imagine, things have not been smooth.
            Movie App and others like it have been targeted by relevant
            authorities for piracy and copyright infringement. But nonetheless,
            they still offer a great streaming option.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
