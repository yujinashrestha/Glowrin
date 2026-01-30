import React, { useEffect, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import Skincareproducts from '../Data/Data';
import Layout from '../components/Layout';
import Routetransition from '../components/Routetransition';
import SearchContext from '../context/SearchContext'; // assuming default export

function Search() {
  const {
    searchQuery,
    setSearchQuery,
    filteredProducts,
    setFilteredProducts,
  } = useContext(SearchContext);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
    } else {
      const filtered = Skincareproducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  return (
    <Layout>
      <Routetransition>
        {/* Outer container with max width and auto margin */}
        <div className="px-4 sm:px-6 lg:px-12 py-8 max-w-[1400px] mx-auto min-h-screen">

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-12 text-center mb-8">
            Showing Results for:{" "}
            <span className="text-blue-600">"{searchQuery}"</span>
          </h2>

          {/* Product Results */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center text-center mt-16 text-gray-500 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 sm:w-28 sm:h-28 mb-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                No products found
              </h3>
              <p className="text-sm sm:text-base">
                Try adjusting your search or browsing another category.
              </p>
            </div>
          )}
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Search;
