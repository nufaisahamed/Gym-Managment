import React, { useState } from "react";
import { Link } from "react-router-dom";
import ali from "../assets/navbar/ali.jpg";
import logo7 from "../assets/navbar/logo7.svg";
import VideoPlayer from "../components/VideoPlayer";
import MarqueeScroll from "../components/MargueeScroll";
import OurStorySection from "../components/OurStorySection";
import FitnessClassCards from "../components/FitnessClassCards";
import OurAdvantagesSection from "../components/OurAdvantagesSection";
import PricingTable from "../components/PricingTable";
import Footer from "../components/Footer";


const Home = () => {
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);

  const toggleTopics = () => {
    setIsTopicsOpen(!isTopicsOpen);
  };
  return (
    <div className="backimg min-h-screen bg-transparent text-white mt-[100px] sm:mt-[120px] md:mt-[120px] lg:mt-[650px]"> 
      {/* Hero Section */}
      <div className="bg-transparent  py-20">
        <div className="text-4xl   sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight px-5 ">
          <h1 className="text-[#333333] hover:text-pink-200  ">Strength,</h1>
          <h1 className="text-[#dbdbdb]">Endurance,</h1>
          <h1 className="text-[#333333] hover:text-pink-200 ">Transformation</h1>
        </div>
        <div className="px-5 mt-5">
          <Link
            to="/signup"
            className=" text-white px-6 py-3 border rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* ------------------------ */}
      {/* <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8">Sign up today and take the first step towards a healthier you.</p>
          <Link
            to="/members"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Join Now
          </Link>
        </div>
      </div> */}
      {/* -------------------------------------- */}
      <div className="iphone flex flex-col justify-center items-center py-8 sm:py-10 md:py-12 lg:py-16 gap-4 sm:gap-5 md:gap-6 bg-black">
        <img
          src={logo7}
          alt="adidas"
          className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto"
        />
        <h6 className="text-white">Adidas Sponsored Athlete</h6>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#855960] text-center px-4">
          The Story of Massy Arias
        </h1>
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
         <VideoPlayer/>
        </div>
      </div>
      <div className="bg-black">
        <MarqueeScroll/>
      </div>
      {/* ------------------ */}
      <div className="p-4  flex flex-col items-center bg-black">
        <button
          className="border-2 border-white text-white rounded-3xl px-6 py-2 bg-black hover:bg-white hover:text-black transition-all duration-300"
          onClick={toggleTopics}
        >
          Touch Me
        </button>

        {/* Topics Div */}
        {isTopicsOpen && (
          <div className="story  mt-4 p-6 border-1 border-b-purple-300 rounded-xl bg-black text-white shadow-lg transition-all duration-300 animate-fadeIn w-full" style={{
           padding: '0',
           margin: '0',
            backgroundImage: `url(${ali})`,// Replace with your image path
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // minHeight: '100vh', // Ensure the background covers the full height
          }}>
            <div className="space-y-2"><OurStorySection/></div>
            <div className=" space-y-2"><FitnessClassCards/></div>
            <div className=" space-y-2"><OurAdvantagesSection/></div>

            <button
              className="mt-4 px-4 py-1 border text-white rounded hover:bg-white hover:text-black transition-colors "
              onClick={() => setIsTopicsOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
      <div className="">
        <PricingTable/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
