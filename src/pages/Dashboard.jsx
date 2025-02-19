import SampleChart1 from "@/components/SampleChart1";
import { SampleChart2 } from "@/components/Samplechart2";
import React from "react";

function Dashboard() {
  return (
    <div className="flex gap-4">
      <SampleChart2 />
      <SampleChart1 />
    </div>
  );
}

export default Dashboard;
