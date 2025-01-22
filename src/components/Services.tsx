import React from 'react';
import { Car, PenTool as Tool, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: <Car className="h-8 w-8 text-blue-600" />,
    title: 'Pre-Purchase Inspection',
    description: 'Comprehensive evaluation before buying a used car to ensure you make an informed decision.'
  },
  {
    icon: <Tool className="h-8 w-8 text-blue-600" />,
    title: 'Diagnostic Testing',
    description: 'Advanced diagnostic testing to identify any existing or potential mechanical issues.'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Safety Certification',
    description: 'Official safety certification to ensure your vehicle meets all regulatory requirements.'
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: 'Regular Maintenance',
    description: 'Scheduled maintenance inspections to keep your vehicle in optimal condition.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive vehicle inspection services tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;