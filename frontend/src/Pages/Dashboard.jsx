import { useState, useEffect } from "react";
const ThingSpeakData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/2586394/feeds.json?results=1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data.feeds[0]); // Assuming you want to display the latest feed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds (adjust as needed)
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">ThingSpeak Data</h1>
      {data && (
        <div className="bg-gray-200 p-4 rounded-md shadow-md">
          <p className="text-lg">Field 1: {data.field1}</p>
          <p className="text-lg">Field 2: {data.field2}</p>
          {/* Add more fields as needed */}
        </div>
      )}
      {!data && <p>Loading...</p>}
    </div>
  );
};

export default ThingSpeakData;
