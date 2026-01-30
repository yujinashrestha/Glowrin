import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Skincareproducts from "../Data/Data";
import ProductCard from "../components/ProductCard";
import Routetransition from "../components/Routetransition";
import Layout from "../components/Layout";

// Custom hook to read query parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Categories() {
  const query = useQuery();
  const categoryName = query.get("category");

  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter products based on category
  useEffect(() => {
    if (categoryName) {
      setCategory(categoryName);

      const filtered = Skincareproducts.filter(
        (product) => product.category === categoryName
      );
      setFilteredProducts(filtered);
    }
  }, [categoryName]);

  return (
    <Layout>
      <Routetransition>
        {/* Outer container with max width and auto margin */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen mx-auto max-w-[1400px]">
          
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10 md:mt-14 text-center mb-10">
            Showing Products for{" "}
            <span className="text-blue-600">{category}</span>
          </h2>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-28 h-28 sm:w-36 sm:h-36 mb-6 text-gray-300"
                fill="none"
                viewBox="0 0 64 64"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  fill="#f3f4f6"
                  stroke="currentColor"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 24h24M20 32h24M20 40h16"
                  className="stroke-gray-400"
                />
                <path
                  d="M44 44l6 6M44 50l6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-red-400"
                />
              </svg>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-700">
                No products found
              </h3>
              <p className="max-w-md text-sm sm:text-base text-gray-500 px-4">
                Oops! We couldn’t find any products under{" "}
                <span className="text-blue-600 font-medium">
                  "{category}"
                </span>
                . Try checking back later or explore other categories to find
                your perfect match.
              </p>
            </div>
          )}
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Categories;
