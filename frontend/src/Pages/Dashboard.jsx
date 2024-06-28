import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null); // New state for start date
  const [endDate, setEndDate] = useState(null); // New state for end date
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.thingspeak.com/channels/2586394/feeds.json?results=1000&start=<span class="math-inline">\{startDate\}&end\=</span>{endDate}` // Fetch larger range with start & end date
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data.feeds);
        if (data.feeds.length > 0) {
          setSelectedDate(data.feeds[0].created_at);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [startDate, endDate]); // Update data on start/end date change

  useEffect(() => {
    if (data.length > 0 && selectedDate) {
      const selectedData = data.filter(
        (feed) => feed.created_at === selectedDate
      );
      if (selectedData.length > 0) {
        const labels = Object.keys(selectedData[0]).filter((key) =>
          key.startsWith("field")
        );
        const values = labels.map((label) => selectedData[0][label]);

        // Chart.js setup
        const ctx = chartRef.current.getContext("2d");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: `Data for ${selectedDate}`,
                data: values,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
        });
      }
    }
  }, [data, selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">ThingSpeak Data</h1>
      {data.length > 0 && (
        <>
          <div className="mb-4">
            <label htmlFor="startDate" className="mr-2">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
              className="p-2"
            />
            <label htmlFor="endDate" className="mr-2 ml-4">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={handleEndDateChange}
              className="p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateSelect" className="mr-2">
              Select Date:
            </label>
            <select
              id="dateSelect"
              value={selectedDate}
              onChange={handleDateChange}
              className="p-2"
            >
              {data.map((feed) => (
                <option key={feed.created_at} value={feed.created_at}>
                  {feed.created_at}
                </option>
              ))}
            </select>
          </div>
          <canvas ref={chartRef} width={400} height={400}></canvas>
        </>
      )}
      {!data.length && <p>Loading...</p>}

    
    </div>
  );
};

export default Dashboard;
