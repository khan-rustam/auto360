import React from 'react';
import { Car, PenTool as Tool, Shield, Clock, CheckCircle, Settings, FileCheck, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Car className="h-12 w-12 text-blue-600" />,
    title: 'Pre-Purchase Inspection',
    description: 'Comprehensive evaluation of vehicle condition before purchase',
    features: [
      'Detailed 150+ point inspection',
      'Engine and transmission testing',
      'Body and frame inspection',
      'Test drive evaluation',
      'Written report with photos'
    ],
    price: '$199'
  },
  {
    icon: <Tool className="h-12 w-12 text-blue-600" />,
    title: 'Diagnostic Testing',
    description: 'Advanced computer diagnostics and mechanical inspection',
    features: [
      'Computer system scanning',
      'Error code analysis',
      'Sensor testing',
      'Performance evaluation',
      'Detailed diagnostic report'
    ],
    price: '$149'
  },
  {
    icon: <Shield className="h-12 w-12 text-blue-600" />,
    title: 'Safety Certification',
    description: 'Official safety inspection and certification',
    features: [
      'Brake system inspection',
      'Steering and suspension check',
      'Light and electrical testing',
      'Emissions testing',
      'Safety certificate issuance'
    ],
    price: '$129'
  },
  {
    icon: <Clock className="h-12 w-12 text-blue-600" />,
    title: 'Regular Maintenance',
    description: 'Scheduled maintenance inspections',
    features: [
      'Fluid level checks',
      'Filter inspections',
      'Belt and hose check',
      'Tire rotation',
      'Maintenance report'
    ],
    price: '$99'
  }
];

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Professional vehicle inspection services tailored to your needs. We ensure your vehicle's safety and performance with our expert team.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Inspection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
              <p className="text-gray-600">Schedule your inspection online or by phone</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vehicle Drop-off</h3>
              <p className="text-gray-600">Bring your vehicle to our facility</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspection</h3>
              <p className="text-gray-600">Thorough inspection by certified technicians</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Report & Review</h3>
              <p className="text-gray-600">Detailed report and recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;