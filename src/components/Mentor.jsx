import React from 'react';

const Mentor = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container max-lg:mx-[2rem] max-md:mx-[0rem] px-4 md:px-6 lg:px-8 max-w-8xl">
        <div className="text-left mb-10 md:mb-14 lg:mb-16 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Your Mentor for This Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Bringing clarity, creativity, and real experience to the table.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[16rem] items-center">
          {/* Mentor Image */}
          <div className="w-full lg:flex-1 max-w-2xl">
            <div 
              className="bg-gray-100 h-[450px] rounded-2xl aspect-square w-full flex items-center justify-center shadow-lg"
              aria-hidden="true"
            >
              <span className="sr-only">Mentor's profile image</span>
              <span className="text-gray-400 text-lg">Mentor Image</span>
            </div>
          </div>
          
          {/* Mentor Info */}
          <div className="w-full lg:flex-1 lg:py-4">
            <h3 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Rajeev Mehta
            </h3>
            <p className="text-gray-600 text-base sm:text-2xl mb-6 md:mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button 
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              aria-label="Join Now"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
