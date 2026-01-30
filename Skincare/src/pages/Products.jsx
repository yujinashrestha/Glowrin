import React from 'react';
import Layout from '../components/Layout';
import Routetransition from '../components/Routetransition';
import ProductCard from '../components/ProductCard';
import Skincareproducts from '../Data/Data';

export default function Products() {
  return (
    <Layout>
      <Routetransition>
        <div className="px-4  pt-14  py-10 max-w-[1200px] mx-auto">
          <h1 className="text-3xl text-black font-bold text-center mb-8">All Products</h1>

          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {Skincareproducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Routetransition>
    </Layout>
  );
}
