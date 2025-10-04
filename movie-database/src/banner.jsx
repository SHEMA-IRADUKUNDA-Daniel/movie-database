import React from "react";
import { useState } from "react";

export default function Banner() {
  const [imgSrc, setImgSrc] = useState(
    "https://www.dneg.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F3sjsytt3tkv5%2F48dw0Wqg1t7RMqLrtodjqL%2Fd72b35dae2516fa64803f4de2ab8e30f%2FAvengers-_Endgame_-_Header_Image.jpeg&w=1920&q=75"
  );
  return (
    <div className="relative h-[400px] overflow-hidden">
      <img
        src={imgSrc}
        alt="banner image"
        className="object-cover w-full h-full  object-center transition-opacity duration-700 ease-in-out"
        onError={() => setImgSrc("/placeholder-movie.jpg")}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-black/50 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute top-60 md:top-70 right-20 left-20">
        {" "}
        <h1 className="  text-center text-3xl text-white font-bold">
          Welcome to MovieDB
        </h1>
        <p className=" text-center  text-white">
          Search, explore, and discover movies that define generations — all in
          one place.
        </p>
      </div>
    </div>
  );
}
