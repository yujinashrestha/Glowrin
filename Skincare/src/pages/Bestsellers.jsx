import React from "react";
import Layout from "../components/Layout";
import Routetransition from "../components/Routetransition";
import Skincareproducts from "../Data/Data";
import ProductCard from "../components/ProductCard";

function Bestsellers() {
  const bestProducts = Skincareproducts.filter(
    (product) => product.bestseller
  );

  return (
    <Layout>
      <Routetransition>
        <div className="px-4 sm:px-6 md:px-12 py-8 md:py-12">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 md:mt-16 text-center mb-6 md:mb-10">
            Our Best Sellers
          </h2>

          {/* Products Grid */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-6
              justify-items-center
            "
          >
            {bestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Bestsellers;
