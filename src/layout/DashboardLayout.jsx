import { Outlet } from "react-router";
import ProfileSetting from "@/components/profile-settings";
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
            <ProfileSetting />
          </div>
          <div className="my-2">{<Outlet />}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default DashboardLayout;
