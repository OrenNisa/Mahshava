import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 7
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    max: 7,
                    suggestedMax: 7,
                },
                grid: {
                    display: true
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return <Bar data={chartData} options={options}/>;
}

export default BarChart;