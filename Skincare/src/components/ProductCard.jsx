import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addtoWishlist, removeWishlist } from '../features/WishlistSlice';
import { addtoCartlist, removeCartlist } from '../features/CartlistSlice';

function ProductCard({ product }) {
  const [showDesc, setShowDesc] = useState(false);

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);
  const cartItems = useSelector((state) => state.cartlist.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const cartlistHandler = () => {
    const nextValue = !isInCart;
    if (nextValue) {
      toast("Item added to the cart");
      dispatch(addtoCartlist(product));
    } else {
      toast("Item removed from the cart");
      dispatch(removeCartlist(product));
    }
  };

  const wishlisthandler = () => {
    const nextValue = !isWishlisted;
    if (nextValue) {
      toast("Item added to the wishlist");
      dispatch(addtoWishlist(product));
    } else {
      toast('Item removed from the wishlist');
      dispatch(removeWishlist(product));
    }
  };

  return (
    <div className="relative bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer mt-10
                    w-full sm:w-[300px] md:w-[320px] lg:w-[350px]">
      {/* Wishlist Icon */}
      <div
        onClick={wishlisthandler}
        className="absolute top-3 right-3 z-10 text-gray-500 hover:text-red-500"
      >
        {isWishlisted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2.748-.717 5.992C5.6 9.375 8 12 8 12s2.4-2.625 8.717-6.008C16.534 4.71 14.852 3 13 3c-1.087 0-2.054.635-2.5 1.528C10.054 3.635 9.087 3 8 3c-1.852 0-3.534 1.71-4.283 2.992z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 3.905C2.882 8.92 5.613 11.613 8 13c2.387-1.387 5.118-4.08 6.286-6.042.955-1.405.837-2.882.314-3.905C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        )}
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-64 sm:h-72 md:h-80 w-full object-cover rounded-t-xl"
      />

      <div className="px-4 py-3">
        <span className="text-gray-400 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate capitalize">{product.name}</p>

        <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-semibold text-black">${product.price}</p>

          <div className="flex items-center space-x-2 justify-between">
            {/* Description Toggle Arrow */}
            <button
              onClick={() => setShowDesc(!showDesc)}
              className="bg-transparent border-none p-0 m-2.5 focus:outline-none appearance-none text-gray-400 hover:text-black transition-colors duration-200"
              aria-label="Toggle Description"
            >
              {showDesc ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>

            {/* Add to Cart Icon */}
            <div onClick={cartlistHandler} className="text-gray-500 hover:text-black cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill={isInCart ? '#FFC107' : 'currentColor'}
                viewBox="0 0 16 16"
              >
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <AnimatePresence>
          {showDesc && (
            <motion.p
              className="mt-2 text-sm text-gray-700 bg-transparent bg-opacity-10 p-2 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {product.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProductCard;
