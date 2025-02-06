import React, {useRef, useState} from 'react';
import { Package, TruckIcon, DollarSign, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { Formik, Form } from 'formik';
import useFormStore from '../store/formStore';
import ShipmentDetails from '../components/bookingForm/ShipmentDetails';
import ReviewBooking from '../components/bookingForm/ReviewBooking';
import PriceSummary from '../components/bookingForm/PriceSummary';
import LocationDetails from '../components/bookingForm/LocationDetails';
import ProgressBar from '../components/tracking/ProgressBar';
import { shipmentDetailsSchema, locationDetailsSchema, pricingSchema, contactSchema } from '../utils/validationSchema';
const STEPS = [
  { title: 'Shipment Details', component: ShipmentDetails, schema: shipmentDetailsSchema },
  { title: 'Locations', component: LocationDetails, schema: locationDetailsSchema },
  { title: 'Pricing', component: PriceSummary, schema: pricingSchema },
  { title: 'Review', component: ReviewBooking, schema: contactSchema },
];
const Booking = () => {
  const { formData, setFormData, currentStep, setCurrentStep } = useFormStore();
  const { component: StepComponent, schema } = STEPS[currentStep];

  const handleSubmit = (values) => {
    if (currentStep === STEPS.length - 1) {
      console.log('Final Submission:', values);
    } else {
      setFormData(values);
      setCurrentStep(currentStep + 1);
    }
  };
 
  return (
    <div className="md:px-4 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold  mb-2">Cargo Shipment Booking</h1>
        <p className="text-gray-600 dark:text-gray-300">Complete the form below to schedule your cargo shipment</p>
      </div>
      <ProgressBar currentStep={currentStep} />
      <div className="w-full lg:min-w-4xl mx-auto md:px-4 pb-8">
      <Formik
     initialValues={formData}
      validationSchema={schema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values }) => (
        <Form>
          <StepComponent />
          {
            currentStep !== 3 && (
          
          <div className="flex justify-between mt-8 pt-6 border-t">
            {currentStep > 0 && (
              <button type="button" className='px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700' onClick={() => setCurrentStep(currentStep - 1)}>
                Previous
              </button>
            )}
            <button type="submit"  className="flex items-center px-6 py-2 bg-[#295BF2] hover:bg-[#296CF2] text-white rounded-lg">
              {currentStep === STEPS.length - 1 ? 'Submit' : 'Next'}
            </button>
            
          </div>
            )
        }
        </Form>
      )}
    </Formik>
      </div>
    </div>
  );
};

export default Booking;
