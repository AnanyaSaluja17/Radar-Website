// import { useState, useEffect, useRef } from "react";
// import Chart from "chart.js/auto
import Calendar from "../Components/Calendar/Calendar"
import Cards from "../Components/Cards/Cards"
import Chart1 from "../Components/Charts/Chart1"
import Chart2 from "../Components/Charts/Chart2"

const Dashboard = () => {
  return (
    <>
      <Calendar />
      <Cards />
      <Chart1 />
      <Chart2 />
    </>
  )
}

export default Dashboard
