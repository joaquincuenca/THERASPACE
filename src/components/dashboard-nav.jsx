import React from "react";
import { dashboardLinks } from "@/utils/navigation";

function DashboardNav() {
  return (
    <div>
      <p className="text-center text-xl">LOGO</p>
      <nav className="mt-4">
        <ul className="flex flex-col gap-2">
          {dashboardLinks.map((item, index) => (
            <li className="px-2 py-2 flex items-center gap-2" key={index}>
              <item.icon className="hidden lg:block" />
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DashboardNav;
