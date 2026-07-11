import React from "react";
import Header from "./Header";
import { FaStar } from "react-icons/fa";

const ProductList = () => {
  return (
    <>
      <Header />
      <div class="p-6 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div class="relative h-48 w-full bg-gray-100">
              <img
                src="https://cdn.runrepeat.com/storage/gallery/product_primary/30973/nike-air-max-97-lab-review-20893750-1080.webp"
                alt="Product"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span class="inline-block px-2 py-1 text-xs font-semibold text-amber-600 bg-amber-50 rounded-md mb-1">
                  SportShoes
                </span>
                <h3 class="text-gray-800 font-bold text-lg mb-2">
                  Nike Air Max 97
                </h3>
                <div class="flex items-center space-x-1">
                  <div class="flex items-center text-amber-400 text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <span class="text-xs font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                    (4.7)
                  </span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-2 border-t border-gray-50">
                <span class="text-l font-extrabold text-gray-900">
                  13,000
                </span>
                <button class="flex items-center space-x-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
