import React from 'react';
import { Package, Shield, Zap } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export function ShipmentList({ shipments, onSelect }) {
  return (
    <div className="space-y-4">
      {shipments.map((shipment) => (
        <div
          key={shipment.id}
          onClick={() => onSelect(shipment)}
          className="bg-[#f5f5f5] dark:bg-off-black-400 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-500 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <StatusBadge status={shipment.currentStatus.status} />
                {shipment.priority && (
                  <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-medium">
                    <Zap size={16} /> Priority
                  </span>
                )}
              </div>
              <h3 className="text-lg font-medium mt-2">{shipment.trackingNumber}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {shipment.origin} → {shipment.destination}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-500">
                <Package size={16} />
                <span className="text-sm">{shipment.packageType}</span>
              </div>
              {shipment.insurance && (
                <div className="flex items-center gap-1 text-gray-500">
                  <Shield size={16} />
                  <span className="text-sm">Insured</span>
                </div>
              )}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
            <span>{shipment.carrier}</span>
            <span>
              Est. Delivery: {new Date(shipment.estimatedDelivery).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}