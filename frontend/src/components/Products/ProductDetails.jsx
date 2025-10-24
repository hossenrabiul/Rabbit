import React from "react";

const ProductDetails = () => {
  const selectedProduct = {
    name: "Stylish Jeans Pent",
    price: 130,
    originalPrice: 120,
    brand: "Fashion Brand",
    size: ["X", "M", "L", "XL"],
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
  return (
    <div className="p-6">
      <div className="border max-w-6xl mx-auto p-8 bg-white rounded-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left side */}
          <div className="hidden md:flex flex-col space-y-2 mr-6">
            {selectedProduct.image.map((product, index) => (
              <img
                key={index}
                src={product.url}
                alt={product.alt}
                className="w-20 h-20 object-cover rounded-lg border"
              />
            ))}
          </div>
          <div className="md:w-1/2 mb-4">
            <div>
              <img
                src={selectedProduct.image[0].url}
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
                className="w-20 h-20 object-cover rounded-lg border"
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
            <p className="mb-3 text-sm font-medium">{selectedProduct.description}</p>
            <p className="text-sm font-medium">Color : </p>
            <div className="flex space-x-2">
                {
                    selectedProduct.color.map((color) => (
                        <button 
                        className="rounded-full px-3 py-3"
                        style={{background : color.toLocaleLowerCase() }}></button>
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
