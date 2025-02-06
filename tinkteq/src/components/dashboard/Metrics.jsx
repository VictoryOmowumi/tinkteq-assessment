import React from "react";
import { FaShippingFast, FaHourglassHalf, FaTruck, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Metrics = ({ shipments }) => {
 
  const total = shipments?.length;
  const pending = shipments?.filter((s) => s.currentStatus.status === "pending").length;
  const inTransit = shipments?.filter((s) => s.currentStatus.status === "shipped").length;
  const delivered = shipments?.filter((s) => s.currentStatus.status === "delivered").length;
  const delayed = shipments?.filter((s) => s.currentStatus.status === "delayed").length;

  // Metric card component
  const MetricCard = ({ label, value, color, icon }) => (
    <div className='flex flex-col gap-5 py-4 px-8 w-full bg-[#e0e0e0] dark:bg-off-black-300  h-full rounded-[20px]'>
      <div className="flex items-center gap-2 justify-between">
        <h3 className="text-lg font-medium ">{label}</h3>
        <div className="flex w-10 h-10 bg-white text-neutral-800 dark:bg-neutral-600 dark:text-neutral-300 rounded-full justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out">
        {icon}
        </div>
      </div>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
      <MetricCard label="Total Shipments" value={total} color="blue" icon={<FaShippingFast strokeWidth={1} />} />
      <MetricCard label="Pending" value={pending} color="yellow" icon={<FaHourglassHalf strokeWidth={1}  />} />
      <MetricCard label="In Transit" value={inTransit} color="purple" icon={<FaTruck strokeWidth={1}  />} />
      <MetricCard label="Delivered" value={delivered} color="green" icon={<FaCheckCircle strokeWidth={1}  />} />
      <MetricCard label="Delayed" value={delayed} color="red" icon={<FaExclamationTriangle strokeWidth={1}  />} />
    </div>
  );
};

export default Metrics;