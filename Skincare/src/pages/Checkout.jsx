import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/CartlistSlice";
import Layout from "../components/Layout";
import Routetransition from "../components/Routetransition";

function Checkout() {
  const cartItems = useSelector((state) => state.cartlist.items);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.email || !formData.address) {
      setToastMessage("⚠️ Please fill in all required fields!");
      setShowToast(true);
      return;
    }

    setToastMessage(
      `🎉 Thank you, ${formData.name}! Your order of $${totalPrice} has been placed.`
    );
    setShowToast(true);

    dispatch(clearCart());

    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      zip: "",
    });

    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <Layout>
     {showToast && (
  <div
    className={`fixed top-5 right-5 z-[9999] max-w-3xl w-auto px-4 py-3 rounded-md shadow-md flex items-center space-x-3 text-sm animate-slideRight ${
      toastMessage.includes("Thank") ? "bg-green-600" : "bg-red-500"
    }`}
  >
    
    <p className="flex-1 text-white truncate">{toastMessage}</p>
    <button
      onClick={() => setShowToast(false)}
      className="text-white font-bold text-lg ml-2 hover:text-gray-200"
    >
      ×
    </button>
  </div>
)}
      <Routetransition>
        <div className="z-80 min-h-screen px-4 sm:px-6 md:px-12 py-10 bg-gray-50 relative">
          {/* ----- Right-side Toast ----- */}
          

          <h1 className="text-black pt-7 sm:pt-16 text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Billing / Shipping Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Billing & Shipping</h2>

              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address*"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="ZIP Code"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="flex-1 space-y-4 overflow-y-auto max-h-[400px]">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500 text-sm">
                          {item.quantity} × ${item.price}
                        </p>
                      </div>
                      <p className="font-semibold text-green-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Your cart is empty
                  </p>
                )}
              </div>

              <div className="flex justify-between font-bold text-lg mt-4 border-t pt-4">
                <span>Total:</span>
                <span className="text-green-600">${totalPrice}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Checkout;
