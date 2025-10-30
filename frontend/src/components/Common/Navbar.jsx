import React, { useState } from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoClose } from "react-icons/io5";
import MobileNavbar from "../Layout/MobileNavbar";

const Navbar = () => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [navDrawOpen, setNavDrawOpen] = useState(false);

  const toggleNavbar = () => {
    setNavDrawOpen(!navDrawOpen);
  };
  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };
  return (
    <>
      <nav className="container mx-auto py-4 px-5 flex justify-between items-center ">
        {/* Left Logo */}
        <div>
          <Link to={"/"} className="text-2xl font-medium">
            Jewelry
          </Link>
        </div>
        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-5">
          <Link
            to={"/collections/all"}
            className="uppercase text-sm font-medium text-gray-700 hover:text-black"
          >
            Men
          </Link>
          <Link
            to={"/"}
            className="uppercase text-sm font-medium text-gray-700 hover:text-black"
          >
            Women
          </Link>
          <Link
            to={"/"}
            className="uppercase text-sm font-medium text-gray-700 hover:text-black"
          >
            Children
          </Link>
        </div>
        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link to={"/profile"} className="hover:text-black">
            <HiOutlineUser className="w-6 h-6 text-gray-700"></HiOutlineUser>
          </Link>
          <button onClick={toggleCartDrawer} className="relative">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"></HiOutlineShoppingBag>
            <span className="absolute text-xs text-white bg-[#ea2e0e] px-2 py-1 rounded-full -top-1">
              4
            </span>
          </button>

          {/* SearchBar */}
          <SearchBar />

          <div onClick={toggleNavbar} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700"></HiBars3BottomRight>
          </div>
        </div>
      </nav>

      {/* Sopping CartDraweer */}
      <div className="overflow-hidden ">
        <CartDrawer
          cartDrawer={cartDrawer}
          toggleCartDrawer={toggleCartDrawer}
        ></CartDrawer>
      </div>

      {/* MObile Navigation */}
      <MobileNavbar
        navDrawOpen={navDrawOpen}
        toggleNavbar={toggleNavbar}
      ></MobileNavbar>
    </>
  );
};

export default Navbar;
