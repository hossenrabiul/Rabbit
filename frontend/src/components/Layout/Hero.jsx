import React from "react";
import heroImg from "../../assets/Reddit/hero-img-2.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="reddit"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute flex inset-0 justify-center items-center">
        <div className="p-6 text-center text-white">
          <h1 className="text-4xl md:text-9xl text-white font-bold mb-4 uppercase tracking-tighter">Vacation Ready</h1>
          <p className="mb-4 text-sm font-medium md:text-lg">Explore out vation-ready outfits with fast worldwide shipping</p>
          <Link to={'#'} className="px-3 py-2 text-white text-sm bg-black rounded">Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
