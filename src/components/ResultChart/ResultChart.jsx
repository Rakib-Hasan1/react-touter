import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const resultData = [
  { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 90 },
  { id: 2, name: "Bob", math: 72, physics: 81, chemistry: 75 },
  { id: 3, name: "Charlie", math: 90, physics: 88, chemistry: 95 },
  { id: 4, name: "Diana", math: 65, physics: 70, chemistry: 60 },
  { id: 5, name: "Ethan", math: 78, physics: 69, chemistry: 80 },
  { id: 6, name: "Fiona", math: 88, physics: 92, chemistry: 85 },
  { id: 7, name: "George", math: 80, physics: 75, chemistry: 82 },
  { id: 8, name: "Hannah", math: 95, physics: 94, chemistry: 96 },
  { id: 9, name: "Ivan", math: 70, physics: 65, chemistry: 72 },
  { id: 10, name: "Jasmine", math: 91, physics: 89, chemistry: 93 },
];

const ResultChart = () => {
  return (
    <>
      <div className="w-11/12 mx-auto mt-30">
        <h1 className="text-5xl text-center my-10">Here is Line Chart</h1>
        <LineChart width={1600} height={700} data={resultData}>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Tooltip
            contentStyle={{
              backgroundColor: "Lightgray",
              border: "1px solid gray",
            }}
          ></Tooltip>
          <Line dataKey={"math"} stroke="#8884d8"></Line>
          <Line dataKey={"physics"} stroke="yellow"></Line>
          <Line dataKey={"chemistry"} stroke="green"></Line>
        </LineChart>
      </div>

      <div className="w-11/12 mx-auto mt-40">
        <h1 className="text-5xl text-center my-10">Here is Bar Chart</h1>
        <BarChart width={1600} height={800} data={resultData}>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Tooltip
            contentStyle={{
              backgroundColor: "lightblue",
              border: "1px solid gray",
            }}
          ></Tooltip>
          <CartesianGrid
            stroke="navy-blue"
            strokeDasharray="5 5"
          ></CartesianGrid>
          <Bar dataKey={"math"} fill="#8884d8" barSize={30}></Bar>
          <Bar dataKey={"physics"} fill="yellow" barSize={30}></Bar>
          <Bar dataKey={"chemistry"} fill="blue" barSize={30}></Bar>
        </BarChart>
      </div>

      <div className="w-11/12 mx-auto mt-40">
      <h1 className="text-5xl text-center my-10">Here is Pie Chart</h1>
        <PieChart width={1600} height={800}>
          <Pie
            data={resultData}
            dataKey={"math"}
            nameKey={"name"}
            fill="#8884d8"
          ></Pie>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </>
  );
};

export default ResultChart;
