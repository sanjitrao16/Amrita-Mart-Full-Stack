import React, { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import ProductInfo from "../components/ProductInfo.jsx";
import FilterIcon from "../assets/Filters.svg";
import PlusIcon from "../assets/PlusIcon.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import products from "../data/products.json"; // Import JSON file

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Stationery", "Personal Hygiene", "Laundry"];

  // Filter products based on active category and search query
  const filteredProducts = products
    .filter((product) =>
      activeCategory ? product.category === activeCategory : true
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  // Open product info modal
  const openProductInfo = (index) => {
    setSelectedProduct(filteredProducts[index]);
    setCurrentIndex(index);
  };

  // Close product info modal
  const closeProductInfo = () => {
    setSelectedProduct(null);
    setCurrentIndex(null);
  };

  // Navigate between products
  const navigateProducts = (direction) => {
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < filteredProducts.length) {
      setSelectedProduct(filteredProducts[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div>
      <div className="p-6">
        {/* Banner */}
        <div className="bg-gray-300 h-50 w-11/12 flex justify-center mx-auto items-center mb-6 rounded-2xl">
          <h2 className="text-xl font-bold">BANNER IMAGE TEXT</h2>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 p-4">
            {/* Search */}
            <div className="relative">
              <div className="flex px-3 bg-gray-300 rounded-lg items-center">
                <img src={SearchIcon} alt="Search" width="18px" height="18px" />
                <input
                  type="text"
                  placeholder="Search products"
                  className="w-full p-2 focus:outline-none text-sm bg-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Search Suggestions Dropdown */}
              {searchQuery && (
                <ul className="absolute w-full bg-white shadow-md rounded-md mt-1 max-h-40 overflow-auto z-10">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => setSearchQuery(product.name)}
                      >
                        {product.name}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">No products found</li>
                  )}
                </ul>
              )}
            </div>

            {/* Categories */}
            <div className="mt-4 border p-2.5 rounded-lg">
              <h3 className="font-bold mb-3 tracking-wide">CATEGORIES</h3>
              <ul className="text-sm">
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`flex items-center justify-between mb-1.5 cursor-pointer p-2 rounded-md hover:bg-gray-300 transition-all ${
                      activeCategory === category
                        ? "bg-gray-400 hover:bg-gray-400"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                    <img
                      src={PlusIcon}
                      alt="Toggle"
                      width="18px"
                      height="18px"
                      className={`transition-transform duration-300 ${
                        activeCategory === category ? "rotate-45" : ""
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 mt-4 w-full px-3 py-1 bg-gray-300 rounded-lg">
              <img src={FilterIcon} alt="Filters" width="18px" height="18px" />
              <p>Filters</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="w-3/4 grid grid-cols-2 gap-4 p-4">
            {/* Trending */}
            <div>
              <h2 className="font-bold text-lg mb-4">Trending</h2>
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onClick={() => openProductInfo(index)}
                />
              ))}
            </div>

            {/* Top Rated */}
            <div>
              <h2 className="font-bold text-lg mb-4">Top Rated</h2>
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onClick={() => openProductInfo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Info Modal */}
      {selectedProduct && (
        <ProductInfo
          product={selectedProduct}
          onClose={closeProductInfo}
          onNavigate={navigateProducts}
          hasNext={currentIndex < filteredProducts.length - 1}
          hasPrev={currentIndex > 0}
        />
      )}
    </div>
  );
};

export default Shop;
