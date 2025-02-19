import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import Settings from "@/pages/Settings";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Landing Page */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Dashboard */}
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
