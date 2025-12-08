import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function LineChartComponent({ data, title }) {
  const ref = useRef();

  useEffect(() => {
    if (!data) return;
    const ctx = ref.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map(d => d.date),
        datasets: [
          { data: data.map(d => d.value), borderWidth: 2 }
        ]
      },
      options: { responsive: true }
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <div>
      <h4>{title}</h4>
      <canvas ref={ref} height="200"></canvas>
    </div>
  );
}
