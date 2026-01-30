import React from "react";
import Layout from "../components/Layout";
import Routetransition from "../components/Routetransition";
import Skincareproducts from "../Data/Data";
import ProductCard from "../components/ProductCard";

function Sales() {
  const onSaleProducts = Skincareproducts.filter((product) => product.onSale);

  return (
    <Layout>
      <Routetransition>
        <div className="px-4 sm:px-6 sm:pt-16 md:px-12 py-6 min-h-screen">
          <h2 className="text-2xl sm:text-3xl font-semibold mt-12 text-center mb-6">
            Sales and Discounts
          </h2>

          {onSaleProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {onSaleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-20">
              No products on sale at the moment.
            </p>
          )}
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Sales;
