import React from "react";
import "./card.css";

export default function Card({ title, value, sub }) {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="value">{value}</div>
      {sub && <div className="sub">{sub}</div>}
    </div>
  );
}
