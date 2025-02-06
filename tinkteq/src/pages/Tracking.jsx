import React, {useState, useEffect} from 'react'
import { ShipmentAnalytics } from '../components/tracking/ShipmentAnalytics';
import { ShipmentFilters } from '../components/tracking/ShipmentFilters';
import { ShipmentSearch } from '../components/tracking/ShipmentSearch';
import { StatusBadge } from '../components/tracking/StatusBadge';
import { ShipmentTracker } from '../components/tracking/ShipmentTracker';
import { ShipmentList } from '../components/tracking/ShipmentList';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');
const Tracking = () => {
  const [shipments, setShipments] = useState([]);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    carrier: '',
    packageType: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch initial shipment data from WebSocket
  useEffect(() => {
    socket.on('shipments', (data) => {
      setShipments(data);
    });

    socket.on('updateShipments', (updatedShipments) => {
      setShipments(updatedShipments);
    });

    return () => {
      socket.off('shipments');
      socket.off('updateShipments');
    };
  }, []);

    // Filter and search shipments
    const filteredShipments = shipments.filter(shipment => {
      const matchesStatus = !filters.status || shipment.currentStatus.status === filters.status;
      const matchesCarrier = !filters.carrier || shipment.carrier === filters.carrier;
      const matchesType = !filters.packageType || shipment.packageType === filters.packageType;
      const matchesSearch = !searchQuery || 
        shipment.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shipment.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shipment.destination.toLowerCase().includes(searchQuery.toLowerCase());
  
      return matchesStatus && matchesCarrier && matchesType && matchesSearch;
    });
  return (
    <div className="min-h-screen bg-[#e0e0e0] dark:bg-off-black-300 rounded-lg p-2 md:p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold  mb-2">Shipment Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-300">Track and manage your shipments in real-time</p>
      </div>
    <div className="min-w-7xl mx-auto pb-8">

      <div className="mb-8">
        <ShipmentAnalytics shipments={shipments} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative  lg:h-[70vh] overflow-y-auto">
        <div>
          <div className="mb-6 space-y-4">
            <ShipmentSearch onSearch={setSearchQuery} />
            <ShipmentFilters filters={filters} onChange={setFilters} />
          </div>
          <ShipmentList
            shipments={filteredShipments}
            onSelect={setSelectedShipment}
          />
        </div>
        
        <div className="sticky top-0 h-max">
          {selectedShipment ? (
            <ShipmentTracker shipment={selectedShipment} />
          ) : (
            <div className="bg-[#f5f5f5] dark:bg-off-black-400 rounded-xl  p-8 text-center">
              <h2 className="text-xl font-semibold ">No Shipment Selected</h2>
              <p className="text-gray-500 mt-2">
                Select a shipment from the list to view detailed tracking information
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tracking