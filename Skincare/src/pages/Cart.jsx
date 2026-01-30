import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCartlist,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../features/CartlistSlice";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Routetransition from "../components/Routetransition";


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartlist.items);

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Layout>
      <Routetransition>
        <div className="max-w-5xl mx-auto mt-10 px-4 pt-7  sm:px-6 py-6">
          <h1 className="text-2xl sm:text-3xl  font-bold mb-6 text-center text-black">
            Your Cart
          </h1>

          {/* Empty Cart */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-12 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14 sm:w-16 sm:h-16 mb-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
                />
              </svg>
              <p className="text-base sm:text-lg font-medium">
                Your cart is empty
              </p>
              <Link
                to="/products"
                className="mt-4 px-5 py-2 bg-black text-white rounded-full
                transition transform hover:scale-105 hover:text-amber-400 duration-300"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex flex-col sm:flex-row
                    sm:items-center sm:justify-between
                    gap-4
                    bg-white p-4 shadow-md rounded-lg
                  "
                >
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                    />

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm sm:text-base">
                        ${item.price}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                          className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 border text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item))}
                          className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex sm:flex-col justify-between sm:items-end">
                    <p className="text-base sm:text-lg font-semibold text-green-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => dispatch(removeCartlist(item))}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* Total */}
              <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-4 border-t pt-4">
                <div className="text-lg sm:text-xl font-bold">
                  Total:{" "}
                  <span className="text-green-600">${totalPrice}</span>
                </div>

                <button
                  onClick={() => dispatch(clearCart())}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Clear Cart
                </button>
              </div>

              {/* Checkout */}
              <div className="flex justify-end">
              <Link to="/checkout"
  className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-center transition transform hover:scale-105 hover:text-amber-400"
>
  Proceed to Checkout
</Link>

              </div>
            </div>
          )}
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Cart;
