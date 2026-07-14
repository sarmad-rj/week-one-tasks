import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ displayedProducts, addToCart }) => {
  if (displayedProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Product not found
        </h3>
        <p className="text-gray-500 text-sm">
          We couldn't find any products matching your search or filters. Try
          adjusting them!
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
