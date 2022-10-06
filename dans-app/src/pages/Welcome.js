import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/splash-image.jpg";

const Welcome = () => {
  return (
    <div
      className=" bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <h1 className="logo absolute top-1/2 left-5 text-4xl">
        LANDRUP <br />
        <span className="text-6xl text-pink font-bold">DANS</span>
      </h1>
      <div className="underline absolute bg-purple w-2/3 top-2/3 h-4"></div>
      <Link
        to="/activities"
        className="absolute bottom-12 w-48 m-auto rounded-xl h-12 flex justify-center p-6 items-center text-center right-0 left-0 text-white text-xl pb-8 bg-purple"
      >
        kom i gang
      </Link>
    </div>
  );
};

export default Welcome;
