import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import "../styles/layout.css";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`layout ${collapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(s => !s)} />

      <div className="right-area">
        <Header onToggleSidebar={() => setCollapsed(s => !s)} />

        <div className="page-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
