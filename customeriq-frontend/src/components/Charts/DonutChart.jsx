import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function DonutChartComponent({ data, title }) {
  const ref = useRef();

  useEffect(() => {
    const ctx = ref.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: data.map(d => d.name),
        datasets: [
          { data: data.map(d => d.value), borderWidth: 1 }
        ]
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
