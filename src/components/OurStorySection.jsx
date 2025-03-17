import React from 'react';


const OurStorySection = () => {
  return (
    <section className="bg-transparent text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4">
          <h2 className="text-red-500 text-5xl font-bold mb-6">OUR STORY</h2>
          <div className="w-16 h-1 bg-gray-500 mb-8"></div>
          
          <p className="text-lg text-gray-300 mb-6">
            Lorem Ipsum is simply dummy text of the printing 
            and typesing industry Lorem Ipsum has been the 
            industrys standard dummy text ever.
          </p>
          
          <p className="text-[#dbdbdb] mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesing industry 
            Lorem Ipsum has been the industrys standard dummy text ever since he 
            when. an own printer took a galley of type and scrambled it to ake a type 
            specimen book It as survived not only five centuries but also the leap into 
            electronic typesetting remaining has been the industrys standard dummy.
          </p>
          
          <div className="space-y-8">
            {/* Open Door Policy */}
            <div className="flex items-start">
              <div className="mr-4">
                <div className="text-red-500 w-12 h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-red-500 font-bold text-xl mb-2">OPEN DOOR POLICY</h3>
                <p className="text-[#dbdbdb]">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesingsus
                  Try Lorem Ipsum Has Been The Industrys.
                </p>
              </div>
            </div>
            
            {/* Fully Insured */}
            <div className="flex items-start">
              <div className="mr-4">
                <div className="text-red-500 w-12 h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10-2h4v2h-4V4zm0 12H8v-2h2v2zm0-4H8v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-red-500 font-bold text-xl mb-2">FULLY INSURED</h3>
                <p className="text-[#dbdbdb]">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesingsus
                  Try Lorem Ipsum Has Been The Industrys.
                </p>
              </div>
            </div>
            
            {/* Personal Trainer */}
            <div className="flex items-start">
              <div className="mr-4">
                <div className="text-red-500 w-12 h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-red-500 font-bold text-xl mb-2">PERSONAL TRAINER</h3>
                <p className="text-[#dbdbdb]">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesingsus
                  Try Lorem Ipsum Has Been The Industrys.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default OurStorySection;