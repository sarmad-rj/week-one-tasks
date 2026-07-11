import React from "react";
import Header from "./Header";
import { FaStar } from "react-icons/fa";
import { initialProducts } from "./products";

const ProductList = () => {
  return (
    <>
      <Header />

      <div class="flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 p-4 pb-0">
        <div class="w-full sm:w-auto flex items-center gap-2">
          <label class="text-sm font-semibold text-gray-600 whitespace-nowrap">
            Category:
          </label>
          <select class="w-full sm:w-48 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="All">All Categories</option>
            <option value="SportShoes">SportShoes</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Apparel">Apparel</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>

        <div class="w-full sm:w-auto flex items-center gap-2">
          <label class="text-sm font-semibold text-gray-600 whitespace-nowrap">
            Sort By:
          </label>
          <select class="w-full sm:w-48 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="default">Select Option</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {initialProducts.map((product) => (
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
                  <button className="flex items-center space-x-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
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
