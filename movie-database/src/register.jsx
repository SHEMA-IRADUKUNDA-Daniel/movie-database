import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className=" pr-0 md:pr-30 gap-10 md:flex-row flex-col   flex items-center justify-center ">
      <div className="relative">
        <img
          className=" h:[100px] md:h-[600px] w-full md:w-300 object-cover "
          src="https://www.dneg.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F3sjsytt3tkv5%2F48dw0Wqg1t7RMqLrtodjqL%2Fd72b35dae2516fa64803f4de2ab8e30f%2FAvengers-_Endgame_-_Header_Image.jpeg&w=1920&q=75"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60 " />
      </div>
      <div className="bg-gradient-to-r mb-5 mx-10 from-primary/10 to-primary-light/20 rounded-2xl p-6 w-[90%] max-w-md shadow-lg">
        <h2 className="text-center mb-5 font-bold text-primary/80">
          Register Form
        </h2>
        <form className="space-y-4 flex flex-col">
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="text"
              name="name"
              className="mt-1 w-full px-4 py-2 border  border-primary rounded-lg focus:outline-none "
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border border-primary rounded-lg focus:outline-none "
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm  font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full px-4 border-primary py-2 border rounded-lg focus:outline-none "
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm  font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full px-4 border-primary py-2 border rounded-lg focus:outline-none "
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600 gap-2">
              <input type="checkbox" className="form-checkbox" />
              Remember me
            </label>
          </div>

          <Button
            className="px-4 py-2 w-full text-center font-bold hover:bg-primary transition shadow-lg bg-gradient-to-r from-primary to-primary-light text-white rounded "
            title="Login"
          />
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to={"/login"}
            type="button"
            className="text-primary/80 font-medium hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
