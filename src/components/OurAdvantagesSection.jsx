import React from 'react';

const OurAdvantagesSection = () => {
  const advantages = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
          <path d="M20 5h-2.586a1 1 0 0 1-.707-.293l-1.121-1.121A2 2 0 0 0 14.172 3H9.828a2 2 0 0 0-1.414.586L7.293 4.707A1 1 0 0 1 6.586 5H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-8 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        </svg>
      ),
      title: "QUALIFIED TRAINERS",
      description:
        "",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
          <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2 14H6V8h12v12z" />
          <path d="M13 10h-2v2H9v2h2v2h2v-2h2v-2h-2z" />
        </svg>
      ),
      title: "FULLY INSURED",
      description:
        "",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
        </svg>
      ),
      title: "INDIVIDUAL TRAINING",
      description:
        "",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
        </svg>
      ),
      title: "TRAINED CHAMPS",
      description:
        "",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
        </svg>
      ),
      title: "MULTIPLE CLASSIS",
      description:
        "",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      title: "OPENDOOR POLICY",
      description:
        "",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
          <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
        </svg>
      ),
      title: "HIGHTECH GYM",
      description:
        "",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
          <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
        </svg>
      ),
      title: "HIGHTECH GYM",
      description:
        "",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-red-500 uppercase tracking-wider transition-transform duration-500 hover:scale-105">
            OUR ADVANTAGES
          </h2>
          <div className="w-16 h-1 bg-gray-500 mx-auto mt-4 transition-all duration-300 hover:w-24 hover:bg-red-500"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center bg-gray-900 bg-opacity-30 rounded-lg p-6 transition-all duration-300 hover:bg-opacity-50 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 border-2 border-red-500 p-3 text-red-500 rounded-full transition-all duration-300 group-hover:border-red-400 group-hover:bg-red-500 group-hover:bg-opacity-10">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-white italic mt-4 mb-2 transition-colors duration-300 group-hover:text-red-400">
                {advantage.title}
              </h3>
              <p className="text-gray-400 text-center transition-colors duration-300 group-hover:text-gray-300">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAdvantagesSection;