import React from "react";
import "./loading.css";

export default function LoadingOverlay({ loading }) {
  if (!loading) return null;

  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}
