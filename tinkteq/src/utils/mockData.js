const locations = [
    'Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan', 
    'Benin City', 'Enugu', 'Kaduna', 'Jos', 'Abeokuta', 
    'Onitsha', 'Warri', 'Maiduguri', 'Uyo', 'Owerri'
  ];
  
  const carriers = [
    { name: 'Red Star Express', code: 'RSE' },
    { name: 'ABC Logistics', code: 'ABC' },
    { name: 'GIG Logistics', code: 'GIG' },
    { name: 'DHL Nigeria', code: 'DHL' },
    { name: 'FedEx Nigeria', code: 'FEX' },
    { name: 'UPS Nigeria', code: 'UPS' },
    { name: 'TNT Nigeria', code: 'TNT' },
  ];
  
  const packageTypes = [
    { type: 'Standard', maxWeight: 20 },
    { type: 'Heavy', maxWeight: 50 },
    { type: 'Fragile', maxWeight: 10 },
    { type: 'Refrigerated', maxWeight: 30 }
  ];
  
  const statusDescriptions = {
    pending: [
      'Package received at sorting facility',
      'Processing at distribution center',
      'Awaiting pickup',
      'Label created, waiting for pickup'
    ],
    shipped: [
      'En route to next facility',
      'Out for delivery',
      'In transit to destination',
      'Arrived at local facility',
      'Departed from origin facility'
    ],
    delivered: [
      'Successfully delivered',
      'Signed by recipient',
      'Left at front door',
      'Delivered to security personnel',
      'Handed directly to recipient'
    ],
    delayed: [
      'Weather delay',
      'Traffic delay in Lagos',
      'Processing delay',
      'Customs clearance delay at airport',
      'Address verification needed'
    ]
  };
  
  export function generateMockStatus(previousStatus) {
    const statuses = ["pending", "shipped", "delayed", "delivered"];
    const currentIndex = previousStatus ? statuses.indexOf(previousStatus.status) : -1;
  
    let newStatus;
  
    if (previousStatus?.status === "delivered") {
      newStatus = "delivered"; // Delivered shipments stay delivered
    } else {
      
      if (previousStatus?.status === "delayed") {
        newStatus = Math.random() > 0.5 ? "shipped" : "pending";
      } else {
        const availableStatuses =
          currentIndex === -1 ? statuses : statuses.slice(currentIndex + 1);
        newStatus = availableStatuses[Math.floor(Math.random() * availableStatuses.length)];
      }
    }
  
    const location = locations[Math.floor(Math.random() * locations.length)];
    const descriptions = statusDescriptions[newStatus];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
  
    return {
      id: previousStatus?.id || crypto.randomUUID(),
      status: newStatus,
      location,
      timestamp: new Date().toISOString(),
      description,
      temperature: Math.floor(Math.random() * 15) + 15,
      humidity: Math.floor(Math.random() * 30) + 40,
      batteryLevel: Math.floor(Math.random() * 30) + 70, 
      shockDetected: Math.random() < 0.1, 
    };
  }
  
  export function generateMockShipment() {
    const carrier = carriers[Math.floor(Math.random() * carriers.length)];
    const packageType = packageTypes[Math.floor(Math.random() * packageTypes.length)];
    const weight = Math.floor(Math.random() * packageType.maxWeight) + 1;
    const origin = locations[Math.floor(Math.random() * locations.length)];
    let destination;
    do {
      destination = locations[Math.floor(Math.random() * locations.length)];
    } while (destination === origin);
  
    const currentStatus = generateMockStatus();
    const statusHistory = Array.from({ length: 3 }, () => generateMockStatus());
  
    return {
      id: crypto.randomUUID(),
      trackingNumber: `${carrier.code}${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
      carrier: carrier.name,
      packageType: packageType.type,
      weight,
      origin,
      destination,
      estimatedDelivery: new Date(Date.now() + 86400000 * (Math.floor(Math.random() * 5) + 1)).toISOString(),
      currentStatus,
      statusHistory,
      signature: Math.random() < 0.7, 
      insurance: Math.random() < 0.5, 
      priority: Math.random() < 0.3, 
      cost: Math.floor(Math.random() * 200) + 50 
    };
  }
  
  export function generateMockShipments(count = 20) {
    return Array.from({ length: count }, generateMockShipment);
  }
  
  