import React from "react";
import { MapPin } from "lucide-react";
import { useFormikContext } from "formik";

const STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi",
  "Bayelsa", "Benue", "Borno", "Cross River", "Delta",
  "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
  "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe",
  "Zamfara", "FCT"
];

const LocationDetails = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <div className="space-y-8 bg-[#e0e0e0] dark:bg-off-black-300 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="text-blue-600" size={24} />
        <h2 className="text-xl font-semibold">Location Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Pickup Address */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium  mb-4">Pickup Address</h3>

          {/* Street Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="pickupAddress.street"
              value={values.pickupAddress.street}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter street address"
              className={`p-2 w-full  bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
                touched.pickupAddress?.street && errors.pickupAddress?.street
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {touched.pickupAddress?.street && errors.pickupAddress?.street && (
              <span className="text-red-500 text-sm">{errors.pickupAddress.street}</span>
            )}
          </div>

          {/* City and State */}
          <div className="grid grid-cols-2 gap-4">
            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                City
              </label>
              <input
                type="text"
                name="pickupAddress.city"
                value={values.pickupAddress.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter city"
                className={`p-2 w-full bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
                  touched.pickupAddress?.city && errors.pickupAddress?.city
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {touched.pickupAddress?.city && errors.pickupAddress?.city && (
                <span className="text-red-500 text-sm">{errors.pickupAddress.city}</span>
              )}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                State
              </label>
              <select
                name="pickupAddress.state"
                value={values.pickupAddress.state}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-2 w-full  bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
                  touched.pickupAddress?.state && errors.pickupAddress?.state
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select state</option>
                {STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {touched.pickupAddress?.state && errors.pickupAddress?.state && (
                <span className="text-red-500 text-sm">{errors.pickupAddress.state}</span>
              )}
            </div>
          </div>

          {/* ZIP Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              name="pickupAddress.zipCode"
              value={values.pickupAddress.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter ZIP code"
              className={`p-2 w-full  bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
                touched.pickupAddress?.zipCode && errors.pickupAddress?.zipCode
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {touched.pickupAddress?.zipCode && errors.pickupAddress?.zipCode && (
              <span className="text-red-500 text-sm">{errors.pickupAddress.zipCode}</span>
            )}
          </div>
        </div>

        {/* Delivery Address */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium  mb-4">Delivery Address</h3>

          {/* Street Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="deliveryAddress.street"
              value={values.deliveryAddress.street}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter street address"
              className={`p-2 w-full  bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
                touched.deliveryAddress?.street && errors.deliveryAddress?.street
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {touched.deliveryAddress?.street && errors.deliveryAddress?.street && (
              <span className="text-red-500 text-sm">{errors.deliveryAddress.street}</span>
            )}
          </div>

          {/* City and State */}
          <div className="grid grid-cols-2 gap-4">
            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                City
              </label>
              <input
                type="text"
                name="deliveryAddress.city"
                value={values.deliveryAddress.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter city"
                className={`p-2 w-full bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
                  touched.deliveryAddress?.city && errors.deliveryAddress?.city
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {touched.deliveryAddress?.city && errors.deliveryAddress?.city && (
                <span className="text-red-500 text-sm">{errors.deliveryAddress.city}</span>
              )}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                State
              </label>
              <select
                name="deliveryAddress.state"
                value={values.deliveryAddress.state}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-2 w-full  bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
                  touched.deliveryAddress?.state && errors.deliveryAddress?.state
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select state</option>
                {STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {touched.deliveryAddress?.state && errors.deliveryAddress?.state && (
                <span className="text-red-500 text-sm">{errors.deliveryAddress.state}</span>
              )}
            </div>
          </div>

          {/* ZIP Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              name="deliveryAddress.zipCode"
              value={values.deliveryAddress.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter ZIP code"
              className={`p-2 w-full  bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
                touched.deliveryAddress?.zipCode && errors.deliveryAddress?.zipCode
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {touched.deliveryAddress?.zipCode && errors.deliveryAddress?.zipCode && (
              <span className="text-red-500 text-sm">{errors.deliveryAddress.zipCode}</span>
            )}
          </div>
        </div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pickup Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
            Pickup Date
          </label>
          <input
            type="date"
            name="pickupDate"
            value={values.pickupDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`p-2 w-full  bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
              touched.pickupDate && errors.pickupDate
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {touched.pickupDate && errors.pickupDate && (
            <span className="text-red-500 text-sm">{errors.pickupDate}</span>
          )}
        </div>

        {/* Delivery Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
            Delivery Date
          </label>
          <input
            type="date"
            name="deliveryDate"
            value={values.deliveryDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`p-2 w-full  bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
              touched.deliveryDate && errors.deliveryDate
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {touched.deliveryDate && errors.deliveryDate && (
            <span className="text-red-500 text-sm">{errors.deliveryDate}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;