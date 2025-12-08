import React from "react";
import useFetch from "../hooks/useFetch";
import FunnelChartComponent from "../components/Charts/FunnelChart";
import "../styles/page.css";

export default function CustomerJourney() {
  const { data, loading } = useFetch("/src/data/amazonPerformance.json");

  return (
    <div className="page">
      <h2>Customer Journey Analysis</h2>

      <div className="grid-2">
        <FunnelChartComponent
          title="Customer Funnel Conversion"
          data={data?.funnel || []}
        />

        <div className="card">
          <h3>Key Metrics</h3>
          <ul>
            <li>Add-to-cart Rate: 12%</li>
            <li>Checkout Success: 58%</li>
            <li>Search Fail Rate: 1.9%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
