import React from "react";
import "./table.css";

export default function Table({ columns, rows }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <td key={j}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
