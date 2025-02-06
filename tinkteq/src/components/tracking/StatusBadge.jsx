import React from 'react';
import { Package, Truck, CheckCircle2, AlertCircle } from 'lucide-react';

const statusConfig = {
  pending: {
    icon: <Package size={18} />,
    color: 'bg-yellow-100 text-yellow-800',
    label: 'Pending'
  },
  in_transit: {
    icon: <Truck size={18} />,
    color: 'bg-blue-100 text-blue-800',
    label: 'In Transit'
  },
  delivered: {
    icon: <CheckCircle2 size={18} />,
    color: 'bg-green-100 text-green-800',
    label: 'Delivered'
  },
  delayed: {
    icon: <AlertCircle size={18} />,
    color: 'bg-red-100 text-red-800',
    label: 'Delayed'
  }
};

export function StatusBadge({ status }) {
  const config = statusConfig[status];
  const icon = config.icon;
  

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium ${config.color}`}>
     {icon}
      {config.label}
    </span>
  );
}