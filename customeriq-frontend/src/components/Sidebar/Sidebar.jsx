import React from "react";
import { NavLink } from "react-router-dom";
import { Home, BarChart, Users, MapPin, Settings, Menu } from "lucide-react";
import "./sidebar.css";

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* TOP BRAND + TOGGLE */}
      <div className="top">
        <h2 className="brand">{!collapsed ? "CustomerIQ" : "CI"}</h2>

        <button className={`toggle-btn ${collapsed ? "rotate" : ""}`} onClick={onToggle}>
          <Menu size={20} />
        </button>
      </div>

      {/* NAVIGATION */}
      <nav className="nav">
        <NavLink to="/" end className="nav-item">
          <Home size={20} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/performance" className="nav-item">
          <BarChart size={20} />
          {!collapsed && <span>Performance</span>}
        </NavLink>

        <NavLink to="/journey" className="nav-item">
          <Users size={20} />
          {!collapsed && <span>Customer Journey</span>}
        </NavLink>

        <NavLink to="/operations" className="nav-item">
          <MapPin size={20} />
          {!collapsed && <span>Operations</span>}
        </NavLink>

        <NavLink to="/revenue" className="nav-item">
          <BarChart size={20} />
          {!collapsed && <span>Revenue</span>}
        </NavLink>

        <div className="spacer"></div>

        <NavLink to="/settings" className="nav-item">
          <Settings size={20} />
          {!collapsed && <span>Settings</span>}
        </NavLink>
      </nav>
    </aside>
  );
}
