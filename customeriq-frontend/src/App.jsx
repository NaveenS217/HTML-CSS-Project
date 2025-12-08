import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Performance from "./pages/Performance";
import CustomerJourney from "./pages/CustomerJourney";
import Operations from "./pages/Operations";
import Revenue from "./pages/Revenue";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="performance" element={<Performance />} />
        <Route path="journey" element={<CustomerJourney />} />
        <Route path="operations" element={<Operations />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
