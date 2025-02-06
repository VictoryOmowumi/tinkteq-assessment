import { Server } from "socket.io";
import { createServer } from "http";
import { generateMockShipments, generateMockStatus } from "./src/utils/mockData.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

let shipments = generateMockShipments(20);

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Send initial shipment data
  socket.emit("shipments", shipments);

  // Interval to update shipments
  const interval = setInterval(() => {
    shipments = shipments.map((shipment) => {
      if (shipment.currentStatus.status === "delivered") {
        return shipment; // Skip delivered shipments
      }

      const updatedStatus = generateMockStatus(shipment.currentStatus);

      return {
        ...shipment,
        currentStatus: updatedStatus,
        statusHistory: [shipment.currentStatus, ...shipment.statusHistory].slice(0, 10),
      };
    });

    console.log("Updated shipments:",); // Debug log
    io.emit("updateShipments", shipments); // Emit updates to all clients
  }, 5000);

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    clearInterval(interval); // Stop interval for disconnected client
  });
});

httpServer.listen(4000, () => {
  console.log("WebSocket server running on port 4000");
});
