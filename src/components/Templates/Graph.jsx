import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import axios from "axios";

const Graph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Next.js API route
        const response = await axios.get("/api/xdcData");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <LineChart width={600} height={356} data={data}>
        <Line
          type="monotone"
          dataKey="price"
          stroke="#16284b"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <XAxis dataKey="date" tick={false} />
        <YAxis domain={["dataMin", "dataMax"]} tick={false} />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Graph;
