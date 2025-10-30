import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideber from "../components/Products/FilterSideber";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleClickOutside = (e) => {
    console.log('eyes')
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpenSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Stylish Jeans",
          image: [
            {
              url: "https://picsum.photos/200/300?random=1",
              alt: "stylish jeans",
            },
          ],
          price: 130,
        },
        {
          _id: 2,
          name: "Stylish T-shirt",
          image: [
            {
              url: "https://picsum.photos/200/300?random=2",
              alt: "stylish jeans",
            },
          ],
          price: 120,
        },
        {
          _id: 3,
          name: "Stylish Shirt",
          image: [
            {
              url: "https://picsum.photos/200/300?random=3",
              alt: "stylish jeans",
            },
          ],
          price: 150,
        },
        {
          _id: 4,
          name: "Stylish",
          image: [
            {
              url: "https://picsum.photos/200/300?random=4",
              alt: "stylish jeans",
            },
          ],
          price: 160,
        },
        {
          _id: 5,
          name: "Stylish Shirt",
          image: [
            {
              url: "https://picsum.photos/200/300?random=5",
              alt: "stylish jeans",
            },
          ],
          price: 190,
        },
        {
          _id: 6,
          name: "Stylish Shirt",
          image: [
            {
              url: "https://picsum.photos/200/300?random=6",
              alt: "stylish jeans",
            },
          ],
          price: 200,
        },
        {
          _id: 7,
          name: "Stylish Shirt",
          image: [
            {
              url: "https://picsum.photos/200/300?random=7",
              alt: "stylish jeans",
            },
          ],
          price: 210,
        },
        {
          _id: 8,
          name: "Stylish Shirt",
          image: [
            {
              url: "https://picsum.photos/200/300?random=8",
              alt: "stylish jeans",
            },
          ],
          price: 220,
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="mt-[124px] flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        className="lg:hidden border flex justify-center items-center p-2"
      >
        <FaFilter className="mr-2" /> Filter
      </button>
      {/* Filter sidebar */}
      <div
        ref={sidebarRef}
        className={`bg-white text-black w-64 h-full border fixed top-0 left-0 z-50 transform transition-transform duration-300 ${
          isOpenSidebar ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto lg:static lg:translate-x-0`}
      >
        <FilterSideber />
      </div>
      <div>
        <h1>Hey</h1>
      </div>
    </div>
  );
};

export default CollectionPage;
