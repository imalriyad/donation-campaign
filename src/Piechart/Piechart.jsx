// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { PieChart, Pie,Tooltip ,Cell, ResponsiveContainer } from "recharts";

const Chart = () => {
  const [storedData, setStoredData] = useState([]);
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("stored"));
    setStoredData(dataFromLocalStorage);
    
    if (dataFromLocalStorage) {
      const parcentage = Math.round((dataFromLocalStorage.length / 12) * 100)
      const remaining = Math.round((100 - parcentage));
      setChartData([{name:'Your Donation' , value: parcentage }, { name:'Total Donation', value: remaining }]);
    }
  }, []);

  const COLORS = ["#00C49F", "#FF444A"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      {storedData === null ? (
        <h1 className="md:text-4xl text-2xl font-bold my-20">Opss! You have not Donated yet</h1>
      ) : (
        <ResponsiveContainer width={320} height={400}>
          <PieChart width={400} height={400}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#FF444A"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      )}

      <div className="md:flex gap-10 max-w-screen-md items-center">
        <h1 className="font-medium">
          {" "}
          Your Donation{" "}
          <span className="bg-[#00C49F] px-10 ml-2 rounded-sm"></span>
        </h1>
        <h1 className="font-medium">
          Total Donation{" "}
          <span className="bg-[#FF444A] px-10 ml-2 rounded-sm"></span>
        </h1>
      </div>
    </div>
  );
};

export default Chart;
