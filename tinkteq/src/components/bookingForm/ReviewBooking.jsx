import React, { useState } from 'react';
import { TruckIcon, Package, MapPin, Calendar, User } from 'lucide-react';
import { useFormikContext } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useBookingStore from '../../store/formStore';
function ReviewBooking() {
  const { values, handleChange, handleBlur, errors, touched, submitForm } = useFormikContext();
  const {currentStep, setCurrentStep } = useBookingStore();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  const handleSubmitConfirmed = async () => {
    try {
      await submitForm(); // Submit the form
      setShowConfirmation(false);
      toast.success('Booking submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="bg-[#e0e0e0] dark:bg-off-black-300 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-6 " >
        <h2 className="text-xl font-semibold">Review Your Booking</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Shipment Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="text-blue-600" size={20} />
              <h3 className="font-medium">Shipment Details</h3>
            </div>
            <div className="bg-[#f7f6f6] dark:bg-off-black-300 rounded-lg p-4 space-y-2">
              <p><span className="text-gray-600">Cargo Type:</span> {values.cargoType}</p>
              <p><span className="text-gray-600">Weight:</span> {values.weight} kg</p>
              <p><span className="text-gray-600">Dimensions:</span> {values.dimensions.length} × {values.dimensions.width} × {values.dimensions.height} cm</p>
              {values.specialHandling.length > 0 && (
                <div>
                  <span className="text-gray-600">Special Handling:</span>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {values.specialHandling.map(item => (
                      <li key={item} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Locations */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-600" size={20} />
              <h3 className="font-medium">Locations</h3>
            </div>
            <div className="bg-[#f7f6f6] dark:bg-off-black-300 rounded-lg p-4 space-y-6">
              <div>
                <p className="font-medium mb-1">Pickup Address</p>
                <p className="text-sm">{values.pickupAddress.street}</p>
                <p className="text-sm">
                  {values.pickupAddress.city}, {values.pickupAddress.state} {values.pickupAddress.zipCode}
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Delivery Address</p>
                <p className="text-sm">{values.deliveryAddress.street}</p>
                <p className="text-sm">
                  {values.deliveryAddress.city}, {values.deliveryAddress.state} {values.deliveryAddress.zipCode}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-6'>


          {/* Schedule */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-600" size={20} />
              <h3 className="font-medium">Schedule</h3>
            </div>
            <div className="bg-[#f7f6f6] dark:bg-off-black-300 rounded-lg p-4 space-y-2">
              <p><span className="text-gray-600">Pickup Date:</span> {new Date(values.pickupDate).toLocaleDateString()}</p>
              <p><span className="text-gray-600">Delivery Date:</span> {new Date(values.deliveryDate).toLocaleDateString()}</p>
            </div>
          </div>



          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="text-blue-600" size={20} />
              <h3 className="font-medium">Contact Information</h3>
            </div>
            <div className="bg-[#f7f6f6] dark:bg-off-black-300 rounded-lg p-4 space-y-2">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    name="contactInformation.name"
                    value={values.contactInformation.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-2 bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg"
                    required
                  />
                  {touched.contactInformation?.name && errors.contactInformation?.name && (
                    <span className="text-red-500 text-sm">{errors.contactInformation.name}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    name="contactInformation.email"
                    value={values.contactInformation.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-2 bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg"
                    required
                  />
                  {touched.contactInformation?.email && errors.contactInformation?.email && (
                    <span className="text-red-500 text-sm">{errors.contactInformation.email}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="contactInformation.phone"
                    value={values.contactInformation.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-2 bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg"
                    required
                  />
                  {touched.contactInformation?.phone && errors.contactInformation?.phone && (
                    <span className="text-red-500 text-sm">{errors.contactInformation.phone}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-off-black-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Booking</h3>
            <p className="mb-6">Are you sure you want to submit this booking?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 bg-gray-300 dark:text-black rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitConfirmed}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions */}
      <div className="bg-blue-50 dark:bg-off-black-400 border border-blue-200 rounded-lg p-4 mt-8">
        <p className="text-sm text-blue-800">
          By submitting this booking, you agree to our terms and conditions for cargo shipment services.
          Please review all details carefully before proceeding.
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex justify-between  mt-5">
        <button type="button" className='px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 dark:text-gray-400' onClick={() => setCurrentStep(currentStep - 1)}>
          Previous
        </button>
        <button
          onClick={handleConfirm}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Booking
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default ReviewBooking;