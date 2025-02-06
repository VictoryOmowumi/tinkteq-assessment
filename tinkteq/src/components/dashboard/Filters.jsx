import React from "react";

const Filters = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full md:w-max grid md:grid-cols-3 gap-4">
      {/* Status Filter */}
      <select
        name="status"
        value={filters.status}
        onChange={handleFilterChange}
        className="p-2 border rounded-md dark:bg-off-black-300 dark:border-none"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="shipped">In Transit</option>
        <option value="delivered">Delivered</option>
        <option value="delayed">Delayed</option>
      </select>

      {/* Carrier Filter */}
      <select
        name="carrier"
        value={filters.carrier}
        onChange={handleFilterChange}
        className="p-2 border rounded-md dark:bg-off-black-300 dark:border-none"
      >
      <option value="">All Carriers</option>
        <option value="GIG Logistics">GIG Logistics</option>
        <option value="DHL Nigeria">DHL Nigeria</option>
        <option value="Red Star Express">Red Star Express</option>
        <option value="ABC Logistics">ABC Logistics</option>
        <option value="FedEx Nigeria">FedEx Nigeria</option>
        <option value="UPS Nigeria">UPS Nigeria</option>
        <option value="TNT Nigeria">TNT Nigeria</option>
      </select>

      <select
        value={filters.packageType}
        onChange={handleFilterChange}
        className="p-2 border rounded-md dark:bg-off-black-300 dark:border-none"
      >
        <option value="">All Package Types</option>
        <option value="Standard">Standard</option>
        <option value="Heavy">Heavy</option>
        <option value="Fragile">Fragile</option>
        <option value="Refrigerated">Refrigerated</option>
      </select>
    </div>
  );
};

export default Filters;
