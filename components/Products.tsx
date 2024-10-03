"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import productsData from './Products.json';

const Products: React.FC = () => {
  const handleProductClick = (productName: string) => {
    window.location.href = `/product/${productName}`;
  };

  return (
    <div className="p-4 lg:flex lg:space-x-4">
      {/* Main product display for desktop */}
      <motion.div
        className="lg:w-2/3 relative mb-4 lg:mb-0 cursor-pointer border-2 border-transparent hover:border-blue-600 transition-colors duration-300 rounded-lg overflow-hidden"
        onClick={() => handleProductClick(productsData[0].title)}
      >
        <Image
          src={productsData[0].images[0]}
          alt={productsData[0].title}
          layout="responsive"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <div className="absolute bottom-0 left-0 bg-opacity-60 bg-gray-900 text-white p-4 w-full">
          <h2 className="text-lg font-bold">{productsData[0].title}</h2>
          <p className="text-md">${productsData[0].price}</p>
          <button className="mt-2 bg-blue-500 text-white rounded-full px-4 py-1 hover:bg-blue-600 transition-colors duration-300">
            View Product
          </button>
        </div>
      </motion.div>

      {/* Secondary products for desktop */}
      <div className="lg:w-1/3">
        {productsData.slice(1, 3).map((product) => (
          <motion.div
            key={product.title}
            className="mb-4 cursor-pointer border-2 border-transparent hover:border-blue-600 transition-colors duration-300 rounded-lg overflow-hidden"
            onClick={() => handleProductClick(product.title)}
          >
            <Image
              src={product.images[0]}
              alt={product.title}
              layout="responsive"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-opacity-60 bg-gray-900 text-white p-2 w-full">
              <h2 className="text-md font-bold">{product.title}</h2>
              <p className="text-sm">${product.price}</p>
              <button className="mt-2 bg-blue-500 text-white rounded-full px-3 py-1 hover:bg-blue-600 transition-colors duration-300">
                View Product
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden grid grid-cols-2 gap-4">
        {productsData.map((product) => (
          <motion.div
            key={product.title}
            className="flex flex-col cursor-pointer border-2 border-transparent hover:border-gray-300 transition-colors duration-300 rounded-lg overflow-hidden"
            onClick={() => handleProductClick(product.title)}
          >
            <Image
              src={product.images[0]}
              alt={product.title}
              layout="responsive"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-opacity-60 bg-gray-900 text-white p-2 w-full">
              <h2 className="text-md font-bold">{product.title}</h2>
              <p className="text-sm">${product.price}</p>
              <button className="mt-2 bg-blue-500 text-white rounded-full px-3 py-1 hover:bg-blue-600 transition-colors duration-300">
                View Product
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Adjust text size for small screens */}
      <style jsx>{`
        @media (max-width: 640px) {
          h2 {
            font-size: 1rem; /* Smaller title font on mobile */
          }
          p {
            font-size: 0.875rem; /* Smaller price font on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default Products;
