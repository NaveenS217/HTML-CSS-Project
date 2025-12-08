import React from "react";
import useFetch from "../hooks/useFetch";
import LineChartComponent from "../components/Charts/LineChart";
import BarChartComponent from "../components/Charts/BarChart";
import "../styles/page.css";

export default function Revenue() {
  const { data, loading } = useFetch("/src/data/amazonPerformance.json");

  return (
    <div className="page">
      <h2>Revenue Overview</h2>

      <div className="grid-2">
        <LineChartComponent
          title="Orders Over Time"
          data={data?.ordersOverTime || []}
        />
        <BarChartComponent
          title="Revenue by Category"
          data={data?.revenueByCategory || []}
        />
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Average Order Value</h3>
          <div className="metric">${data?.aov}</div>
        </div>

        <div className="card">
          <h3>Refund Percentage</h3>
          <div className="metric">{data?.refundPercent}%</div>
        </div>
      </div>
    </div>
  );
}
