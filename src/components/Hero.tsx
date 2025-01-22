import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
           }}>
        <span className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold leading-tight">
                Your Car's Health Is Our Priority
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Professional vehicle inspection services ensuring your safety and peace of mind.
                Trust our expert technicians for comprehensive diagnostics and evaluations.
              </p>
              <button className="mt-8 bg-blue-600 text-white font-bold px-6 py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition duration-300">
                Schedule Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;