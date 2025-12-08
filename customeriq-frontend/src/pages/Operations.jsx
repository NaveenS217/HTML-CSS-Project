import React from "react";
import useFetch from "../hooks/useFetch";
import BarChartComponent from "../components/Charts/BarChart";
import Table from "../components/Tables/Table";
import "../styles/page.css";

export default function Operations() {
  const { data, loading } = useFetch("http://127.0.0.1:8000/api/operations/");

  return (
    <div className="page">
      <h2>Operations Performance</h2>

      <div className="grid-2">
        <BarChartComponent
          title="Delivery Delays (Days)"
          data={data?.deliveryDelays || []}
        />
        <BarChartComponent
          title="Warehouse Throughput"
          data={data?.warehouseProcessing || []}
        />
      </div>

      <h3>Courier Partner Performance</h3>
      <Table
        columns={["Courier", "On-Time %", "Delays"]}
        rows={data?.couriers?.map(c => [
          c.name,
          c.onTimePercent + "%",
          c.delays
        ])}
      />
    </div>
  );
}
