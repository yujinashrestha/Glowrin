import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import Routetransition from '../components/Routetransition';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Wishlist() {
  const wishlistProducts = useSelector((state) => state.wishlist.items);
  const productno = wishlistProducts.length;

  return (
    <Layout>
      <Routetransition>
        {/* Outer container with max width and auto margin for equal left/right spacing */}
        <div className="px-4 sm:pt-16 sm:px-6 lg:px-12 py-20 bg-white min-h-screen max-w-[1400px] mx-auto">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Your Wishlist
          </h1>

          {productno > 0 ? (
            /* Responsive grid with consistent gaps */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {wishlistProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center mt-10 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-20 h-20 sm:w-24 sm:h-24 mb-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
                />
              </svg>
              <p className="text-lg sm:text-xl font-medium mb-4">
                Your wishlist is empty
              </p>
              <Link
                to="/products"
                className="px-6 py-3 bg-black text-white rounded-full 
                  transition-transform transform hover:scale-105 
                  hover:text-amber-400 duration-300 text-sm sm:text-base"
              >
                Browse Products
              </Link>
            </div>
          )}
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Wishlist;
