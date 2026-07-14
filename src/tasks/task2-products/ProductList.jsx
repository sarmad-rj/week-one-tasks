import React from "react";
import Header from "./Header/Header";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { initialProducts } from "./products";
import Filter from "./Filter/Filter";

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [cart, setCart] = useState([]);

  const categories = [
    "All",
    "SportShoes",
    "Electronics",
    "Accessories",
    "Apparel",
    "Furniture",
  ];

  const filteredProducts = initialProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((product) => {
      if (selectedCategory === "All") return 1;
      return product.category === selectedCategory;
    });

  const displayedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "low-high") {
      return a.price - b.price; 
    }
    if (sortBy === "high-low") {
      return b.price - a.price; 
    }
    if (sortBy === "rating") {
      return b.rating - a.rating; 
    }
    return 0; 
  });

  const addToCart = (product) => {
    setCart((oldCart) => {
      const existingItem = oldCart.find((item) => item.id === product.id);

      if (existingItem) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });
  };

  useEffect(() => {
    if (cart.length > 0) {
      console.log("CURRENT CART DATA:");
      console.table(cart); 
    }
  }, [cart]);

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cart={cart}
      />

      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-amber-600 bg-amber-50 rounded-md mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-gray-800 font-bold  mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center text-amber-400 text-sm">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                      ({product.rating})
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                  <span className="text-l font-extrabold text-gray-900">
                    {product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center space-x-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors"
                  >
                    <FaBagShopping />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
