import React from 'react';
import { TrendingUp, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

export function ShipmentAnalytics({ shipments }) {
  const stats = shipments.reduce((acc, shipment) => {
    acc.total++;
    acc[shipment.currentStatus.status]++;
    
    if (shipment.currentStatus.shockDetected) {
      acc.shockDetected++;
    }
    
    if (shipment.priority) {
      acc.priority++;
    }
    
    acc.totalValue += shipment.cost;
    
    return acc;
  }, {
    total: 0,
    pending: 0,
    shipped: 0,
    delivered: 0,
    delayed: 0,
    shockDetected: 0,
    priority: 0,
    totalValue: 0
  });

  const cards = [
    {
      title: 'Active Shipments',
      value: stats.total - stats.delivered,
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      title: 'Delayed',
      value: stats.delayed,
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      title: 'Incidents',
      value: stats.shockDetected,
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      title: 'Delivered',
      value: stats.delivered,
      icon: CheckCircle2,
      color: 'text-green-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.title} className="bg-[#eeeeee] dark:bg-off-black-300  h-full rounded-[20px] p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className="text-2xl font-semibold mt-1">{card.value}</p>
            </div>
            <card.icon className={`${card.color}`} size={24} />
          </div>
        </div>
      ))}
    </div>
  );
}