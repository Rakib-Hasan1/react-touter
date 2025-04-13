import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
      avg:
        (studentData.marks.physics +
          studentData.marks.chemistry +
          studentData.marks.math) /
        3,
    };
    return student;
  });

  console.log(marksChartData);

  return (
    <div className="w-11/12 mx-auto my-40">
        <h1 className="text-4xl text-center my-20">Configure API and show Chart</h1>
      <BarChart width={1600} height={800} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip
          contentStyle={{
            backgroundColor: "lightblue",
            border: "1px solid gray",
            fontSize: "16px",
            padding: "10px",
            borderRadius: "10px"
          }}
        ></Tooltip>
        <Bar dataKey="avg" fill="#8884d8"></Bar>
        <Bar dataKey="physics" fill="#82ca9d"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
