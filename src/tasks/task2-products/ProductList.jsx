import React from "react";
import Header from "./Header/Header";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { initialProducts } from "./products";
import Filter from "./Filter/Filter";
import ProductGrid from "./Components/ProductGrid";

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

      <ProductGrid
        displayedProducts={displayedProducts}
        addToCart={addToCart}
      />
    </>
  );
};

export default ProductList;
