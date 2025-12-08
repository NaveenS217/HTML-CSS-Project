import React from "react";
import useFetch from "../hooks/useFetch";
import LineChartComponent from "../components/Charts/LineChart";
import BarChartComponent from "../components/Charts/BarChart";
import Table from "../components/Tables/Table";
import "../styles/page.css";

export default function Performance() {
  const { data, loading } = useFetch("/src/data/amazonPerformance.json");

  const avgLatency =
    data?.latencyByRegion?.reduce((a, b) => a + b.latency, 0) /
      data?.latencyByRegion?.length || 0;

  const avgResponse =
    data?.apiResponseTimes?.reduce((a, b) => a + b.avgResponse, 0) /
      data?.apiResponseTimes?.length || 0;

  return (
    <div className="page">
      <div className="page-header">
        <h2>Application Performance</h2>
        <p className="page-subtitle">
          Track API response health, latency issues, and slow endpoints.
        </p>
      </div>

      {/* CHARTS */}
      <div className="grid-2">

        <div className="chart-box">
          <div className="chart-header">
            <h3>API Response Time (24h)</h3>
            <span className="chart-value">{avgResponse.toFixed(0)} ms</span>
          </div>
          <LineChartComponent
            data={data?.apiResponseTimes || []}
          />
        </div>

        <div className="chart-box">
          <div className="chart-header">
            <h3>Latency by Region</h3>
            <span className="chart-value">{avgLatency.toFixed(0)} ms</span>
          </div>
          <BarChartComponent
            data={data?.latencyByRegion || []}
          />
        </div>

      </div>

      {/* TABLE SECTION */}
      <div className="table-card">
        <h3>Slowest APIs</h3>
        <Table
          columns={["API", "Response (ms)", "Errors %"]}
          rows={data?.slowApis?.map(api => [
            api.name,
            api.avgResponse,
            api.errorsPercent + "%"
          ])}
        />
      </div>
    </div>
  );
}
