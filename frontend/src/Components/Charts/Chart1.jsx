import { useEffect, useState } from "react"
import CanvasJSReact from "@canvasjs/react-charts"

const { CanvasJSChart } = CanvasJSReact

const Chart1 = () => {
  const [dataPoints, setDataPoints] = useState([])

  useEffect(() => {
    fetch("https://canvasjs.com/data/gallery/react/nifty-stock-price.json")
      .then((response) => response.json())
      .then((data) => {
        const points = data.map((point) => ({
          x: new Date(point.x),
          y: point.y,
        }))
        setDataPoints(points)
      })
  }, [])

  const options = {
    theme: "light2",
    title: {
      text: "Max speed of cars in 2014",
    },
    data: [
      {
        type: "line",
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0.00",
        dataPoints: dataPoints,
        color: "#ab4e52", // setting the line color to maroon
      },
    ],
  }

  return (
    <div
      id="chart1"
  
    >
      {" "}
      {/* This id is used for scrolling */}
      <CanvasJSChart options={options} />
    </div>
  )
}

export default Chart1
