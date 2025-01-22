import React, { useState } from 'react';
import { Calendar, Clock, Car, CreditCard, CheckCircle } from 'lucide-react';

const BookInspection = () => {
  const [step, setStep] = useState(1);

  const services = [
    {
      id: 1,
      name: 'Pre-Purchase Inspection',
      price: 199,
      duration: '2-3 hours',
      description: 'Comprehensive evaluation before buying a used car'
    },
    {
      id: 2,
      name: 'Diagnostic Testing',
      price: 149,
      duration: '1-2 hours',
      description: 'Advanced computer diagnostics and mechanical inspection'
    },
    {
      id: 3,
      name: 'Safety Certification',
      price: 129,
      duration: '1-2 hours',
      description: 'Official safety inspection and certification'
    },
    {
      id: 4,
      name: 'Regular Maintenance',
      price: 99,
      duration: '1 hour',
      description: 'Scheduled maintenance inspections'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Book Your Inspection
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Schedule your vehicle inspection in just a few simple steps
          </p>
        </div>
      </div>

      {/* Booking Steps */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                <Car className="h-5 w-5" />
              </div>
              <span className="text-sm mt-2">Service</span>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                <Calendar className="h-5 w-5" />
              </div>
              <span className="text-sm mt-2">Date & Time</span>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                <CreditCard className="h-5 w-5" />
              </div>
              <span className="text-sm mt-2">Payment</span>
            </div>
          </div>

          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Select Your Service</h2>
              <div className="grid gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="border rounded-lg p-6 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300"
                    onClick={() => setStep(2)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold">{service.name}</h3>
                        <p className="text-gray-600 mt-1">{service.description}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-blue-600">
                        ${service.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => setStep(3)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-8">
                Your inspection has been scheduled successfully. We've sent a confirmation email with all the details.
              </p>
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Book Another Inspection
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookInspection;