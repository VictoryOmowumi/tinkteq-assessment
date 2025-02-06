// components/ProgressBar.js
import React from 'react';
import { Package, MapPin, DollarSign, TruckIcon } from 'lucide-react';

const STEPS = [
  { title: 'Shipment Details', icon: Package },
  { title: 'Locations', icon: MapPin },
  { title: 'Pricing', icon: DollarSign },
  { title: 'Review', icon: TruckIcon },
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex justify-between  w-full mb-8 relative">
      {STEPS.map((step, index) => (
        <div
          key={step.title}
          className={`flex flex-col  ${
            index < currentStep ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
              index < currentStep
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-400 bg-gray-50'
            }`}
          >
            <step.icon size={20} />
          </div>
          <span className="mt-2 text-sm font-medium z-10">{step.title}</span>
          <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-300 z-[-1]"></div>
      <div
        className="absolute top-5 left-0 h-0.5 bg-blue-600 z-[-1]"
        style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
      ></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;