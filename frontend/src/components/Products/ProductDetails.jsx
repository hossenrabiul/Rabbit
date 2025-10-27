import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const ProductDetails = () => {
  const selectedProduct = {
    name: "Stylish Jeans Pent",
    price: 130,
    originalPrice: 120,
    brand: "Fashion Brand",
    sizes: ["X", "M", "L", "XL"],
    color: ["Red", "Blue", "Orange"],
    description: "This a stylish jeans pent perfect for any occation",
    image: [
      {
        url: "https://picsum.photos/200/300?random=1",
        alt: "Stylish Pent",
      },
      {
        url: "https://picsum.photos/200/300?random=2",
        alt: "Stylish Pent",
      },
    ],
  };

  const GridProducts = [
    {
      _id : 1,
      name : 'The best jeans pent ever',
      price : 1000,
      image : "https://picsum.photos/200/300?random=20",
    },
    {
      _id : 2,
      name : 'The best Ledis pent ever',
      price : 1200,
      image : "https://picsum.photos/200/300?random=22",
    },
    {
      _id : 3,
      name : 'The best Child pent ever',
      price : 1100,
      image : "https://picsum.photos/200/300?random=23",
    },
    {
      _id : 4,
      name : "The best Women's pent ever",
      price : 1300,
      image : "https://picsum.photos/200/300?random=24",
    },
  ]

  const [mainImage, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    if (selectedProduct.image.length > 0) {
      setImage(selectedProduct.image[0].url);
    }
  }, []);

  const handleAddToCart = ()=>{
    if(!selectedColor || !selectedSize){
      toast.error('Please select a color and size',{
        duration: 2000,
      })
      return;
    }

    setIsButtonDisabled(true)
    setTimeout(()=>{
     
      toast.success("Product added to cart!",{
        duration: 500,
      })
      setIsButtonDisabled(false);
    },1000)

    
  }
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left side */}
          <div className="hidden md:flex flex-col space-y-2 mr-6">
            {selectedProduct.image.map((product, index) => (
              <img
                key={index}
                src={product.url}
                alt={product.alt}
                className={`w-20 h-20 object-cover rounded-lg border ${
                  product.url == mainImage ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setImage(product.url)}
              />
            ))}
          </div>

          {/* Main image */}
          <div className="md:w-1/2 mb-4">
            <div>
              <img
                src={mainImage}
                alt={selectedProduct.image[0].alt}
                className="w-full h-auto object-cover rounded-lg border "
              />
            </div>
          </div>

          {/* Mobile version */}
          <div className="md:hidden flex space-x-4 mb-4">
            {selectedProduct.image.map((product, index) => (
              <img
                key={index}
                src={product.url}
                alt={product.alt}
                className={`w-20 h-20 object-cover rounded-lg border ${
                  product.url == mainImage ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setImage(product.url)}
              />
            ))}
          </div>

          {/* Right side */}
          <div className="md:w-1/2 md:ml-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {selectedProduct.name}
            </h2>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.price}
            </p>
            <p className="text-lg text-gray-500 mb-2">
              ${selectedProduct.originalPrice}
            </p>
            <p className="mb-3 text-sm font-medium">
              {selectedProduct.description}
            </p>
            <p className="text-lg font-bold">Color : </p>
            <div className="flex space-x-4 mt-2">
              {selectedProduct.color.map((color) => (
                <button
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-full px-3 py-3 ${selectedColor === color && "border-4 border-black"}`}
                  style={{ background: color.toLocaleLowerCase() }}
                ></button>
              ))}
            </div>
            <p className="mt-3 text-lg font-bold">Size : </p>
            <div className="flex space-x-4 mt-2">
              {selectedProduct.sizes.map((size) => (
                <button onClick={()=> setSelectedSize(size)} className={`px-2 py-1 rounded border text-sm ${selectedSize === size && "bg-black text-white"}`}>
                  {size}
                </button>
              ))}
            </div>

            {/* quantity */}
            <p className="mt-4 text-lg font-bold">Quantity : </p>
            <div className="flex items-center gap-4 mt-2">
              <button onClick={() => handleQuantityChange("minus")} className="px-2 py-1 rounded border text-lg bg-gray-200">
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button onClick={() => handleQuantityChange("plus")} className="px-2 py-1 rounded border text-lg bg-gray-200">
                +
              </button>
            </div>

            <button 
             onClick={handleAddToCart}
             disabled={isButtonDisabled}
             className={`mt-5 font-semibold py-3 px-2 bg-black text-white w-full rounded ${isButtonDisabled ? "bg-gray-500" : "bg-black"}`}>
              {isButtonDisabled ? "Add to Cart..." : "Add to Cart"}
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="roboto-font text-center mb-4 text-3xl font-bold">You May Like Also</h2>

          <ProductGrid products={GridProducts}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
