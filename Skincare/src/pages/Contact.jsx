import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ContactUs() {
  return (
    <Layout>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <section className="relative z-10 bg-gray-100 bg-opacity-90 min-h-screen py-20 px-4 sm:px-6 md:px-10 lg:px-20 font-family-outfit">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
            Get in Touch with Glowrin
          </h2>
          <p className="text-center text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base px-2 sm:px-0">
            We’d love to hear from you! Whether you have a question about our products, your skin type, or just want to say hi — our team is ready to answer all your questions.
          </p>

          <form className="space-y-4 sm:space-y-6">
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-50 bg-white text-gray-800"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-50 bg-white text-gray-800"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us what’s on your mind..."
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-50 bg-white text-gray-800"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-xl hover:bg-black transition text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </Layout>
  );
}
