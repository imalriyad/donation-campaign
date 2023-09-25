import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const storedData = JSON.parse(localStorage.getItem("stored"));
const parcentage = (storedData?.length / 12) * 100;
const remaining = 100 - parcentage;

const chartData = [{ value: parcentage }, { value: remaining }];

console.log(parcentage, remaining);
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

export default class Chart extends PureComponent {
  render() {
    return (
      <div>
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
          </PieChart>
        </ResponsiveContainer>

        <div className="md:flex gap-10  max-w-screen-md items-center">
          <h1 className="font-medium"> Your Donation <span className="bg-[#00C49F] px-10 ml-2 rounded-sm"></span></h1>
          <h1 className="font-medium">Total Donation <span className="bg-[#FF444A] px-10 ml-2 rounded-sm"></span></h1>
        </div>
      </div>
    );
  }
}
