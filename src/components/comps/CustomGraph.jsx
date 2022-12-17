import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const CustomGraph = ({ data }) => {
  return (
    <div className="text-center">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={500} height={300} data={data}>
          <Line type="monotone" dataKey="level" stroke="#8884d8" />
          <CartesianGrid stroke="#757c82" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

CustomGraph.defaultProps = {
  data: [
    { level: 10, time: "Time NULL", pv: 2400, amt: 2400 },
    { level: 15, time: "Time NULL", pv: 2400, amt: 2400 },
    { level: 12, time: "Time NULL", pv: 2400, amt: 2400 },
    { level: 20, time: "Time NULL", pv: 2400, amt: 2400 },
    { level: 19, time: "Time NULL", pv: 2400, amt: 2400 },
    { level: 5, time: "Time NULL", pv: 2400, amt: 2400 },
    { level: 1, time: "Time NULL", pv: 2400, amt: 2400 },
    { level: 9, time: "Time NULL", pv: 2400, amt: 2400 },
    { level: 18, time: "Time NULL", pv: 2400, amt: 2400 },
  ],
};

export default CustomGraph;
