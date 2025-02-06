import React, { useMemo } from 'react';
import { DollarSign, Info } from 'lucide-react';
import { calculatePrice } from '../../utils/calculatePrice';
import { useFormikContext } from 'formik';
const PriceSummary = () => {
   
  const { values } = useFormikContext();


  const calculateDistanceFee = () => {
    
    const distance = Math.floor(Math.random() * 1000);
    return distance * 0.1; 
  };

   const calculateBasePrice = () => {
    const volume = values.dimensions.length * values.dimensions.width * values.dimensions.height;
    const basePrice = (parseFloat(values.weight) * 2) + (volume * 0.001);
    return Math.max(50, basePrice); 
  };

  const calculateSpecialHandlingFees = () => {
    return values.specialHandling.length * 25; 
  };



  const pricing = useMemo(() => {
    const basePrice = calculateBasePrice();
    const specialHandlingFees = calculateSpecialHandlingFees();
    const distanceFee = calculateDistanceFee();
    const subtotal = basePrice + specialHandlingFees + distanceFee;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;

    return {
      basePrice,
      specialHandlingFees,
      distanceFee,
      subtotal,
      tax,
      total
    };
  }, [values]);

  return (
    <div className="space-y-6 bg-[#e0e0e0] dark:bg-off-black-300 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-6">
      <DollarSign className="text-blue-600" size={24} />
      <h2 className="text-xl font-semibold">Pricing Summary</h2>
    </div>

    <div className=" rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Base Price</span>
            <div className="group relative">
              <Info size={16} className="text-gray-400 cursor-help" />
              <div className="hidden group-hover:block absolute left-full ml-2 p-2 bg-gray-800 text-white text-xs rounded w-48">
                Based on weight and dimensions of your cargo
              </div>
            </div>
          </div>
          <span className="font-medium">${pricing.basePrice.toFixed(2)}</span>
        </div>

        {pricing.specialHandlingFees > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Special Handling Fees</span>
            <span className="font-medium">${pricing.specialHandlingFees.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Distance Fee</span>
          <span className="font-medium">${pricing.distanceFee.toFixed(2)}</span>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${pricing.subtotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Tax (10%)</span>
          <span className="font-medium">${pricing.tax.toFixed(2)}</span>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-blue-600">${pricing.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-blue-50 dark:bg-off-black-400 border border-blue-200 rounded-lg p-4">
      <h3 className="font-medium text-blue-800 mb-2">Price Guarantee</h3>
      <p className="text-sm text-blue-600">
        This price is guaranteed for the next 24 hours. Book now to secure this rate.
      </p>
    </div>
  </div>
  );
};

export default PriceSummary;