import React from 'react';
import { MapPin, Calendar, Thermometer, Droplets, Battery, Zap, Shield, Package } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export function ShipmentTracker({ shipment }) {
  return (
    <div className=" bg-[#f5f5f5] dark:bg-off-black-400 rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="border-b pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold ">Shipment Details</h1>
            <p className="text-sm text-gray-500 mt-1">Tracking Number: {shipment.trackingNumber}</p>
          </div>
          <div className="flex items-center gap-3">
            {shipment.priority && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 font-medium">
                <Zap size={16} /> Priority
              </span>
            )}
            {shipment.insurance && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-100 text-purple-800 font-medium">
                <Shield size={16} /> Insured
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="py-6">
        <div className="flex items-center justify-between">
          <StatusBadge status={shipment.currentStatus.status} />
          <p className="text-sm text-gray-500">
            Last Updated: {new Date(shipment.currentStatus.timestamp).toLocaleString()}
          </p>
        </div>
        
        <p className="mt-4 text-gray-700 dark:text-gray-200">{shipment.currentStatus.description}</p>

        {/* Environmental Data */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Thermometer size={18} />
            <span>{shipment.currentStatus.temperature}°C</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Droplets size={18} />
            <span>{shipment.currentStatus.humidity}%</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Battery size={18} />
            <span>{shipment.currentStatus.batteryLevel}%</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Package size={18} />
            <span>{shipment.weight} kg</span>
          </div>
        </div>

        {shipment.currentStatus.shockDetected && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
            ⚠️ Shock detected during transit. Package inspection recommended.
          </div>
        )}
      </div>

      {/* Shipment Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-t">
        <div>
          <h2 className="text-lg font-semibold mb-4">Shipment Information</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-400 mt-1" size={20} />
              <div>
                <p className="text-sm font-medium text-gray-500">From</p>
                <p className="text-gray-900 dark:text-gray-300">{shipment.origin}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-400 mt-1" size={20} />
              <div>
                <p className="text-sm font-medium text-gray-500">To</p>
                <p className="text-gray-900 dark:text-gray-300">{shipment.destination}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="text-gray-400 mt-1" size={20} />
              <div>
                <p className="text-sm font-medium text-gray-500">Estimated Delivery</p>
                <p className="text-gray-900 dark:text-gray-300">
                  {new Date(shipment.estimatedDelivery).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Package Details</h3>
            <div className="bg-gray-50 dark:bg-off-black-300 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Carrier</p>
                  <p className="font-medium">{shipment.carrier}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Package Type</p>
                  <p className="font-medium">{shipment.packageType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium">{shipment.weight} kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cost</p>
                  <p className="font-medium">${shipment.cost}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Timeline */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Status History</h2>
          <div className="space-y-4">
            {[shipment.currentStatus, ...shipment.statusHistory].map((status) => (
              <div key={status.id} className="flex items-start gap-3">
                <div className="relative">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                  <div className="absolute top-3 bottom-0 left-1 -ml-px w-0.5 bg-gray-200" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-300">{status.description}</p>
                  <p className="text-xs text-gray-500">
                    {status.location} • {new Date(status.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}