import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Bar, Pie} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

const Analytics = ({ shipments }) => {

    const { theme } = useContext(ThemeContext);

    // Calculate counts for charts
    const statusCounts = shipments.reduce((acc, shipment) => {
        acc[shipment.currentStatus.status] = (acc[shipment.currentStatus.status] || 0) + 1;
        return acc;
    }, {});

    const carrierCounts = shipments.reduce((acc, shipment) => {
        acc[shipment.carrier] = (acc[shipment.carrier] || 0) + 1;
        return acc;
    }, {});

    // Define color palette
    const statusColors = ["#296CF2", "#F2D64B", "#EFF2E4", "#4B95A6"];
    const carrierColors = ["#EFF2E4", "#F2D64B", "#296CF2", "#4B95A6"];

    // Chart data
    const statusChartData = {
        labels: Object.keys(statusCounts),
        datasets: [
            {
                label: "Shipments",
                data: Object.values(statusCounts),
                backgroundColor: statusColors,
                borderRadius: 8,
            },
        ],
    };

    const carrierChartData = {
        labels: Object.keys(carrierCounts),
        datasets: [
            {
                label: "Shipments by Carrier",
                data: Object.values(carrierCounts),
                backgroundColor: carrierColors,
            },
        ],
    };



    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bar Chart */}
            <div className="bg-[#e0e0e0] col-span-2 dark:bg-off-black-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold  mb-5">
                    Shipment Status
                </h3>
                <div style={{ height: "300px" }}>
                    <Bar data={carrierChartData} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        barThickness: 70,

                        plugins: {
                            legend: {
                                display: false,
                                position: "top",
                                labels: {
                                    color: carrierColors,
                                    font: {
                                        size: 14,
                                        family: "Poppins, sans-serif",
                                    },
                                },
                            },
                            grid: {
                                display: false,
                            },
                           
                            tooltip: {
                                callbacks: {
                                    label: (context) => `${context.label}: ${context.raw} shipments`,
                                },
                                titleColor: theme === "dark" ? "#EFF2E4" : "#4B95A6",
                                bodyColor: "#EFF2E4",
                            },
                        },
                    }} />
                </div>
            </div>

            {/* Line Chart */}
            <div className="bg-[#e0e0e0] dark:bg-off-black-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold  mb-2">
                    Shipments Over Time
                </h3>
                <div style={{ height: "300px" }}>
                    <Pie data={statusChartData}
                        options={
                            {
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        display: false,
                                        position: "top",
                                        labels: {
                                            color: statusColors,
                                            font: {
                                                size: 14,
                                                family: "Poppins, sans-serif",
                                            },
                                        },
                                    },
                                    tooltip: {
                                        callbacks: {
                                            label: (context) => `${context.label}: ${context.raw} shipments`,
                                        },

                                        titleColor: theme === "dark" ? "#EFF2E4" : "#4B95A6",
                                        bodyColor: "#EFF2E4",

                                    },
                                },
                            }
                        }
                    />
                </div>
            </div>


        </div>
    );
};

export default Analytics;
