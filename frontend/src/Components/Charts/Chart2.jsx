import React from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Chart2 = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(128, 0, 0, 0.2)", // maroon color with transparency
        borderColor: "rgba(128, 0, 0, 1)", // maroon color solid
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
  }

  return (
    <div
      id="chart2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem 0",
        width: "90%",
        height: "400px", // decrease the height
      }}
    >
      <div style={{ width: "100%", height: "100%",
        margin: "5rem 25rem ",
       }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default Chart2
