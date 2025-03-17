import React from "react";
import logo1 from "../assets/navbar/logo1.svg";
import logo2 from "../assets/navbar/logo2.svg";
import logo3 from "../assets/navbar/logo3.svg";
import logo5 from "../assets/navbar/logo5.svg";
import logo6 from "../assets/navbar/logo6.svg";
import logo7 from "../assets/navbar/logo7.svg";
import logo8 from "../assets/navbar/logo8.svg";
import logo9 from "../assets/navbar/logo9.svg";


const MarqueeScroll = () => {
  const scrollMarquee = [
    logo1,
    logo2,
    logo3,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
  ];

  return (
    <div>
      <div className=" overflow-hidden mx-auto p-5 w-full">
        <div className="flex">
          <div className="animate-marquee flex flex-shrink-0">
            {scrollMarquee.map((image, index) => (
              <img
                className="h-10 w-20 pr-6 md:h-20 md:w-40 md:pr-10 hover-effect"
                src={image}
                key={`${image}-${index}`}
                alt={`Logo ${index + 1}`}
              />
            ))}
            {/* Duplicate the images for seamless looping */}
            {scrollMarquee.map((image, index) => (
              <img
                className="h-10 w-20 pr-6 md:h-20 md:w-40 md:pr-10 hover-effect"
                src={image}
                key={`${image}-${index}-duplicate`}
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeScroll;