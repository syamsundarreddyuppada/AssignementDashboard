import React, { useState } from "react";

import "./MainContentLeftCharts.css";

import LineChart from "./LineChart";

import PieChartComponent from "./PieChartComponent";
import TableCharts from "./TableCharts";

function MainContentLeftCharts() {
  return (
    <div className="MainContentLeftCharts__content">
      <div className="main__content_body">
        <div className="line_chart">
          <LineChart />
        </div>
        <div className="line_chart">
          <PieChartComponent />
        </div>
      </div>
      <div className="table_chart_wrapper">
        <TableCharts />
      </div>
    </div>
  );
}

export default MainContentLeftCharts;
