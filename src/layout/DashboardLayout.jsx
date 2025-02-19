import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Outlet } from "react-router";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function DashboardLayout() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-2">
          <div className="flex justify-between">
            <SidebarTrigger />
            <ModeToggle />
          </div>

          {<Outlet />}
        </main>
      </SidebarProvider>
    </div>
  );
}

export default DashboardLayout;
