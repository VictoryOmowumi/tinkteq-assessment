import React from "react";
import { PiPackage } from "react-icons/pi";
import { useFormik, useFormikContext } from "formik";

// Cargo types and special handling options
const CARGO_TYPES = [
  "General Cargo",
  "Fragile Items",
  "Perishable Goods",
  "Hazardous Materials",
  "Heavy Equipment",
];

const SPECIAL_HANDLING = [
  "Temperature Controlled",
  "Handle with Care",
  "Express Delivery",
  "Insurance Required",
  "Custom Clearance",
];


const ShipmentDetails = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <div className="space-y-6 bg-[#e0e0e0] dark:bg-off-black-300 rounded-lg p-4">
      <div className="flex items-center gap-2  mb-6">
        <PiPackage className="text-blue-600" size={24} />
        <h2 className="text-xl font-semibold">Shipment Details</h2>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#e0e0e0] dark:bg-off-black-300 rounded-lg ">
      {/* Cargo Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-400">
          Cargo Type
        </label>
        <select
          name="cargoType"
          value={values.cargoType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
            touched.cargoType && errors.cargoType
              ? "border-red-500"
              : "border-gray-300"
          }`}
        >
          <option value="">Select cargo type</option>
          {CARGO_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {touched.cargoType && errors.cargoType && (
          <p className="text-sm text-red-500 mt-1">{errors.cargoType}</p>
        )}
      </div>

      {/* Weight */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-400">
          Weight (kg)
        </label>
        <input
          type="number"
          name="weight"
          value={values.weight}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter weight in kg"
          className={`w-full p-2 bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
            touched.weight && errors.weight
              ? "border-red-500"
              : "border-gray-300"
          }`}
          min="0"
        />
        {touched.weight && errors.weight && (
          <p className="text-sm text-red-500 mt-1">{errors.weight}</p>
        )}
      </div>
    </div>

      {/* Dimensions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-400">
          Dimensions (cm)
        </label>
        <div className="grid md:grid-cols-3 gap-4">
          {["length", "width", "height"].map((dim) => (
            <div key={dim}>
              <input
                type="number"
                name={`dimensions.${dim}`}
                value={values.dimensions[dim]}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={dim.charAt(0).toUpperCase() + dim.slice(1)}
                className={`w-full p-2 bg-[#f5f5f5] dark:bg-off-black-400 border rounded-lg ${
                  touched.dimensions?.[dim] &&
                  errors.dimensions?.[dim]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                min="0"
              />
              {touched.dimensions?.[dim] &&
                errors.dimensions?.[dim] && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.dimensions[dim]}
                  </p>
                )}
            </div>
          ))}
        </div>
      </div>

      {/* Special Handling */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-400">
          Special Handling Requirements
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          {SPECIAL_HANDLING.map((option) => (
            <label key={option} className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="specialHandling"
                value={option}
                checked={values.specialHandling.includes(option)}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-200">{option}</span>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ShipmentDetails;
