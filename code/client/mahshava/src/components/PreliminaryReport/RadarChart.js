import React from "react";
import {Radar} from "react-chartjs-2";
import BarChart from "./BarChart";

function RadarChart({chartData}) {
    const options = {
        responsive: true,
        scales: {
            r: {
                display: true,
                ticks: {
                    display: false,
                },
                grid: {
                    circular: false,
                },
                pointLabels: {
                    display: false,
                }
            }
        },
        elements: {
            arc:{
                borderWidth : 0
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return <Radar data={chartData} options={options}/>;
}

export default RadarChart;