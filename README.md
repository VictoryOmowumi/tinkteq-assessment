# Tinkteq Logistics Dashboard

This project is a logistics dashboard for Tinkteq, allowing users to view and track their shipments. The dashboard includes features such as shipment metrics, analytics, and a detailed shipment table.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup Notes](#setup-notes)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/tinkteq-logistics-dashboard.git
   cd tinkteq
   npm install
   npm run dev
2. **Run the WebSocket server:**
    ```Ensure that the WebSocket server is running on http://localhost:4000. You can start the server by running the following command:
      node server.js
3. **tinkteq/**

        ├── public/
        │   ├── index.html
        │   └── ...
        ├── src/
        │   ├── components/
        │   │   ├── dashboard/
        │   │   │   ├── Analytics.jsx
        │   │   │   ├── Filters.jsx
        │   │   │   ├── Metrics.jsx
        │   │   │   ├── ShipmentTable.jsx
        │   │   │   └── ...
        │   │   ├── shared/
        │   │   │   ├── Loading.jsx
        │   │   │   ├── TopNav.jsx
        │   │   │   └── ...
        │   ├── context/
        │   │   ├── ThemeContext.jsx
        │   │   └── ...
        │   ├── pages/
        │   │   ├── Dashboard.jsx
        │   │   ├── Booking.jsx
        │   │   └── ...
        │   ├── store/
        │   │   ├── formStore.js
        │   │   └── ...
        │   ├── utils/
        │   │   ├── mockData.js
        │   │   ├── validationSchema.js
        │   │   └── ...
        │   ├── App.jsx
        │   ├── index.js
        │   └── ...
        ├── server.js
        ├── package.json
        └── README.md
   4. **Technologies Used**
      
          React: A JavaScript library for building user interfaces.
          Zustand: A small, fast, and scalable bearbones state-management solution.
          Formik: A library for building forms in React.
          Yup: A JavaScript schema builder for value parsing and validation.
          Socket.io: A library for real-time web applications.
          Tailwind CSS: A utility-first CSS framework for rapid UI development
   5. **Setup Notes**
         
          Ensure that you have Node.js and npm installed on your machine.
          The WebSocket server should be running on http://localhost:4000. You can start the server by running node server.js.
          The project uses Tailwind CSS for styling. Ensure that you have the necessary PostCSS and Autoprefixer plugins installed.
