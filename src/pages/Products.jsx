import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: 'Protein Powder',
      price: 30,
      image: 'https://m.media-amazon.com/images/I/719YpGSLmIL._AC_UL480_FMwebp_QL65_.jpg', // Replace with actual image URL
      description: 'High-quality protein powder for muscle recovery.',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Dumbbells',
      price: 50,
      image: 'https://m.media-amazon.com/images/I/71hmkD6-0xL._AC_UL480_FMwebp_QL65_.jpg', // Replace with actual image URL
      description: 'Adjustable dumbbells for home workouts.',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Yoga Mat',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/71VaLeCKVGL._AC_UL480_FMwebp_QL65_.jpg', // Replace with actual image URL
      description: 'Eco-friendly yoga mat for comfortable workouts.',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Resistance Bands',
      price: 15,
      image: 'https://m.media-amazon.com/images/I/61dqjz2uE6L._AC_UL480_FMwebp_QL65_.jpg', // Replace with actual image URL
      description: 'Set of 5 resistance bands for strength training.',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Jump Rope',
      price: 10,
      image: 'https://m.media-amazon.com/images/I/71l2-gWOnpL._AC_UL480_FMwebp_QL65_.jpg', // Replace with actual image URL
      description: 'Durable jump rope for cardio workouts.',
      rating: 4.4,
    },
    {
      id: 6,
      name: 'Foam Roller',
      price: 25,
      image: 'https://m.media-amazon.com/images/I/61oiHHde+SL._AC_UL480_FMwebp_QL65_.jpg', // Replace with actual image URL
      description: 'High-density foam roller for muscle recovery.',
      rating: 4.9,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="ml-2 text-gray-600">({product.rating})</span>
                </div>
                <p className="text-xl font-bold text-gray-800 mb-4">₹{product.price}</p>
                <button
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;