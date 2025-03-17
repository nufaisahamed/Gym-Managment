import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const PricingTable = () => {
  const { addToCart } = useContext(CartContext);

  const plans = [
    {
      id: 1,
      name: 'BASIC',
      price: 199,
      features: [
        'Limited Install',
        'Unlimited Download',
        'Free One Year Support',
        'Free 15GB Linux Hosting',
        '30GB Storage',
      ],
    },
    {
      id: 2,
      name: 'GOLD',
      price: 300,
      features: [
        'Limited Install',
        'Unlimited Download',
        'Free One Year Support',
        'Free 15GB Linux Hosting',
        '30GB Storage',
      ],
    },
    {
      id: 3,
      name: 'PLATINUM',
      price: 499,
      features: [
        'Limited Install',
        'Unlimited Download',
        'Free One Year Support',
        'Free 15GB Linux Hosting',
        '30GB Storage',
      ],
    },
  ];

  return (
    <div className="pricing flex flex-col md:flex-row justify-center items-stretch gap-6 bg-transparent p-8 w-full py-10">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="group flex flex-col w-full md:w-1/3 bg-transparent border border-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div className="p-6 bg-gray-800 transition-colors duration-300 group-hover:bg-gray-700">
            <h2 className="text-3xl font-bold text-red-500 transition-transform duration-300 group-hover:scale-105">
              {plan.name}
            </h2>
            <p className="text-gray-300 mt-2 transition-colors duration-300 group-hover:text-gray-200">
              Best For Startup Companies Loem Umsum Dolor Summit Imets
            </p>
          </div>

          <div className="p-6 bg-gray-700 transition-colors duration-300 group-hover:bg-gray-600">
            <div className="flex items-baseline">
              <span className="text-xl text-white">$</span>
              <span className="text-5xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                {plan.price}
              </span>
              <span className="text-xl text-white ml-1">month</span>
            </div>
          </div>

          <div className="flex-grow p-6 space-y-4">
            {plan.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center transition-transform duration-300 group-hover:translate-x-2"
              >
                <svg
                  className="w-5 h-5 text-green-500 transition-colors duration-300 group-hover:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 text-white transition-colors duration-300 group-hover:text-gray-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6">
            <button
              className="bg-white text-gray-900 font-bold py-3 px-6 w-full rounded transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-105"
              onClick={() => addToCart(plan)} // Add the plan to the cart
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;