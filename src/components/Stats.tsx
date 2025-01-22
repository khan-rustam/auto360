import React from 'react';
import { Users, CheckCircle, Award } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white">15,000+</h3>
            <p className="mt-2 text-xl text-blue-100">Satisfied Customers</p>
          </div>
          
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white">20,000+</h3>
            <p className="mt-2 text-xl text-blue-100">Inspections Completed</p>
          </div>
          
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white">10+</h3>
            <p className="mt-2 text-xl text-blue-100">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;