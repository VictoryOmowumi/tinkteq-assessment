import React from 'react';
import { Filter } from 'lucide-react';

export function ShipmentFilters({ filters, onChange }) {
  return (
    <div className="grid md:grid-cols-4  gap-4 items-center">
      <div className="flex items-center gap-2">
        <Filter size={18} className="text-gray-500" />
        <span className="font-medium">Filters:</span>
      </div>

      <select
        value={filters.status}
        onChange={(e) => onChange({ ...filters, status: e.target.value })}
        className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm bg-[#f5f5f5] dark:bg-off-black-400"
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
        <option value="delayed">Delayed</option>
      </select>

      <select
        value={filters.carrier}
        onChange={(e) => onChange({ ...filters, carrier: e.target.value })}
        className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm bg-[#f5f5f5] dark:bg-off-black-400"
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
        onChange={(e) => onChange({ ...filters, packageType: e.target.value })}
        className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm bg-[#f5f5f5] dark:bg-off-black-400"
      >
        <option value="">All Package Types</option>
        <option value="Standard">Standard</option>
        <option value="Heavy">Heavy</option>
        <option value="Fragile">Fragile</option>
        <option value="Refrigerated">Refrigerated</option>
      </select>
    </div>
  );
}