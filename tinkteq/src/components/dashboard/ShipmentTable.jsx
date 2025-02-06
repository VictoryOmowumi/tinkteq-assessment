import React from "react";

const ShipmentTable = ({ shipments }) => {
    
const displayedShipments = shipments.slice(0, 10);

return (
    <div className="bg-[#e0e0e0] dark:bg-off-black-300 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Shipments List</h3>
        <div className="overflow-x-auto mb-5">
            <table className="w-full border-collapse border border-gray-200 dark:border-off-black-300 ">
                <thead>
                    <tr className="bg-neutral-300 text-left  dark:bg-neutral-700 dark:text-neutral-100 ">
                        <th className="py-3 px-2">Tracking No.</th>
                        <th className="py-3 px-2">Carrier</th>
                        <th className="py-3 px-2">Origin</th>
                        <th className="py-3 px-2">Package Type</th>
                        <th className="py-3 px-2">Destination</th>
                        <th className="py-3 px-2">Status</th>
                        <th className="py-3 px-2">Last Updated</th>
                        <th className="py-3 px-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedShipments.length > 0 ? (
                        displayedShipments.map((shipment) => (
                            <tr key={shipment.id} className="">
                                <td className="px-2 py-3 border-b border-off-white-300 dark:border-off-black-300">{shipment.trackingNumber}</td>
                                <td className="px-2 py-3 border-b border-off-white-300 dark:border-off-black-300">{shipment.carrier}</td>
                                <td className="px-2 py-3 border-b border-off-white-300 dark:border-off-black-300">{shipment.origin}</td>
                                <td className="px-2 py-3 border-b border-off-white-300 dark:border-off-black-300">{shipment.packageType}</td>
                                <td className="px-2 py-3 border-b border-off-white-300 dark:border-off-black-300">{shipment.destination}</td>
                                <td className={`px-2 py-3 border-b border-off-white-300 dark:border-off-black-300 capitalize ${
                                    shipment.currentStatus.status === "delayed" ? "text-red-500" :
                                    shipment.currentStatus.status === "pending" ? "text-yellow-500" :
                                    shipment.currentStatus.status === "shipped" ? "text-blue-500" :
                                    "text-green-700"
                                }`}>
                                    {shipment.currentStatus.status}
                                </td>
                                <td className="p-2 border-b border-off-white-300 dark:border-off-black-300">{new Date(shipment.currentStatus.timestamp).toLocaleString()}</td>
                                <td className="p-2 border-b border-off-white-300 dark:border-off-black-300">
                                    <button className="border border-neutral-900 dark:border-neutral-600  px-2 py-1 rounded-md">View</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center p-4 text-gray-500">
                                No shipments available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
);
};

export default ShipmentTable;
