import React, { useState, useEffect } from "react";
import Metrics from "../components/dashboard/Metrics";
import Filters from "../components/dashboard/Filters";
import ShipmentTable from "../components/dashboard/ShipmentTable";
import Analytics from "../components/dashboard/Analytics";
import io from "socket.io-client";
import Loading from "../components/shared/Loading";
const socket = io("http://localhost:4000");

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);
  const [filters, setFilters] = useState({ status: "", carrier: "" });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
 


    // Listen for initial shipments
    socket.on("shipments", (data) => {
      setShipments(data);
    });

    setLoading(false);

    // Listen for shipment updates
    socket.on("updateShipments", (updatedShipments) => {
      setShipments(updatedShipments);
    });

    // Log when WebSocket disconnects
    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

  
    return () => {
      socket.off("connect");
      socket.off("shipments");
      socket.off("updateShipments");
      socket.off("disconnect");
    };
  }, []);

  // Apply filters to shipments
  const filteredShipments = shipments.filter((shipment) => {
    if (filters.status && shipment.currentStatus.status !== filters.status) return false;
    if (filters.carrier && shipment.carrier !== filters.carrier) return false;
    return true;
  });

  if (loading) return <Loading />;

  return (
    <div className=" md:px-4 min-h-screen">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex flex-col gap-1 mb-5">
          <h1 className="text-2xl md:text-4xl font-normal ">Shipment Dashboard</h1>
          <p className="text-sm md:text-lg font-light text-gray-600 dark:text-neutral-400">
            Welcome. Here you can view all your shipments and track their status.
          </p>
        </div>
        <Filters filters={filters} setFilters={setFilters} />
      </div>

      <Metrics shipments={filteredShipments} />

      <div className="mt-6">
        <Analytics shipments={filteredShipments} />
      </div>

      <div className="mt-6">
        <ShipmentTable shipments={filteredShipments} />
      </div>
    </div>
  );
};

export default Dashboard;
