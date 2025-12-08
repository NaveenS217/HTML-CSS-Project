import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function BarChartComponent({ data, title }) {
  const ref = useRef();

  useEffect(() => {
    if (!data) return;
    const ctx = ref.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map(d => d.name),
        datasets: [{ data: data.map(d => d.value), borderWidth: 1 }]
      }
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
