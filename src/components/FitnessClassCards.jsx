import React from 'react';
import gym from "../assets/navbar/gym.jpg";
import boxing1 from "../assets/navbar/boxing1.jpg";
import yoga from "../assets/navbar/yoga.jpg";

const FitnessClassCards = () => {
  return (
    <div className="bg-transparent text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Body Building Card */}
          <div className="flex flex-col bg-black rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={gym} 
                alt="Body building trainer" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 text-center flex-1 flex flex-col">
              <p className="text-red-500 font-bold text-lg mb-2 transition-colors duration-300 hover:text-red-400">₹800 Month</p>
              <h3 className="text-3xl font-bold italic mb-4 text-white">BODY BUILDING</h3>
              
              <div className="border-t border-b border-gray-800 py-4 mb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-red-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Mon-Fri | 9.00 - 10.00</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-red-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Austin Jane</span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-center flex-1">
                Lorem Ipsum is simply dummy text of the printing and typesingustry Lorem Ipsum.
              </p>
              
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">Read More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Yoga Card */}
          <div className="flex flex-col bg-black rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="p-6 text-center order-2 md:order-1 flex-1 flex flex-col">
              <p className="text-red-500 font-bold text-lg mb-2 transition-colors duration-300 hover:text-red-400">₹300 Month</p>
              <h3 className="text-3xl font-bold italic mb-4 text-white">YOGA</h3>
              
              <div className="border-t border-b border-gray-800 py-4 mb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-red-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Mon-Fri | 9.00 - 10.00</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-red-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Austin Jane</span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-center flex-1">
                Lorem Ipsum is simply dummy text of the printing and typesingustry psum has.
              </p>
              
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">Read More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative h-80 order-1 md:order-2 overflow-hidden">
              <img 
                src={yoga}
                alt="Yoga pose" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
          
          {/* Boxing Card */}
          <div className="flex flex-col bg-black rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={boxing1}
                alt="Boxing trainer" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 text-center flex-1 flex flex-col">
              <p className="text-red-500 font-bold text-lg mb-2 transition-colors duration-300 hover:text-red-400">₹1199 Month</p>
              <h3 className="text-3xl font-bold italic mb-4 text-white">BOXING</h3>
              
              <div className="border-t border-b border-gray-800 py-4 mb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-red-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Mon-Fri | 9.00 - 10.00</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-red-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Austin Jane</span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-center flex-1">
                Lorem Ipsum is simply dummy text of the typesingustry orem Ipsum has been industrys.
              </p>
              
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">Read More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessClassCards;