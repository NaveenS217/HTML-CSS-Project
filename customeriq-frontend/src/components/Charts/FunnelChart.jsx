import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function FunnelChartComponent({ data, title }) {
  const ref = useRef();

  useEffect(() => {
    const ctx = ref.current.getContext("2d");

    const sorted = [...data].sort((a, b) => b.value - a.value);

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: sorted.map(d => d.stage),
        datasets: [{ data: sorted.map(d => d.value) }]
      },
      options: { indexAxis: "y" }
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <div>
      <h4>{title}</h4>
      <canvas ref={ref}></canvas>
    </div>
  );
}
