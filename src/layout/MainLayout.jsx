import HomeNavLinks from "@/components/home-nav-links";
import { ModeToggle } from "@/components/ui/mode-toggle";
import React from "react";
import { Outlet } from "react-router";
function MainLayout() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      <nav className="flex justify-between">
        <HomeNavLinks />
        <ModeToggle />
      </nav>
      {<Outlet />}
    </div>
  );
}

export default MainLayout;
