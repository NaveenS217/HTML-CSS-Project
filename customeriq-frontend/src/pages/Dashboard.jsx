import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Cards/Card";
import LineChartComponent from "../components/Charts/LineChart";
import DonutChartComponent from "../components/Charts/DonutChart";
import LoadingOverlay from "../components/Loading/LoadingOverlay";
import "../styles/page.css";

export default function Dashboard() {
  const { data, loading } = useFetch("/src/data/amazonPerformance.json");

  return (
    <div className="page">
      <LoadingOverlay loading={loading} />

      <div className="page-header">
        <h2>Dashboard Overview</h2>
        <p className="page-subtitle">Monitor your application health and customer insights.</p>
      </div>

      {!loading && (
        <>
          {/* KPI Cards */}
          <div className="kpi-row">
            <Card title="App Uptime" value={data.uptime} sub="Last 24 hours" />
            <Card title="API Response" value={data.avgApiResponse + ' ms'} sub="Average response" />
            <Card title="Visitors" value="140k" sub="Past week" />
            <Card title="Orders Today" value="15,432" sub="Live orders" />
          </div>

          {/* Chart Row */}
          <div className="grid-2">
            <div className="chart-box">
              <LineChartComponent
                title="Traffic Over Time"
                data={data.traffic}
              />
            </div>

            <div className="chart-box donut-center">
              <DonutChartComponent
                title="Order Success Rate"
                data={[
                  { name: "Success", value: 98 },
                  { name: "Failed", value: 45 }
                ]}
              />
              <div className="donut-label">
                <h3>75%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
