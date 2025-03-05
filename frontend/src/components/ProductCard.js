import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.images[0]} // Use the image path from the product data
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">{product.name}</h5>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-4">Price: ${product.price}</p>
        <Link
          to={`/product/${product._id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;