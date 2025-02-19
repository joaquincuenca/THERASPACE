import HomeNavLinks from "@/components/home-nav-links";
import { ModeToggle } from "@/components/ui/mode-toggle";
import React from "react";
import { Outlet } from "react-router";
function MainLayout() {
  return (
    <div className="">
      <nav className="flex justify-between">
        Hello World
      </nav>
      {<Outlet />}
    </div>
  );
}

export default MainLayout;
