import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { lineData, lineOptions } from "./Charts";
import "./LineChart.css";
import { Line } from "react-chartjs-2";

function LineChart() {
  const [selectMonth, setSelectMonth] = useState("");
  const modifiedLineData = {};
  const selectedMonthDigit = selectMonth === "" ? 6 : selectMonth;
  Object.entries(lineData).forEach(([key, value]) => {
    if (key === "labels") {
      return (modifiedLineData[key] = value.slice(0, selectedMonthDigit));
    } else if (key === "datasets") {
      const result = value.map((item) => ({
        ...item,
        data: item.data.slice(0, selectedMonthDigit),
      }));
      return (modifiedLineData[key] = result);
    } else {
      return (modifiedLineData[key] = value);
    }
  });
  

  return (
    <div>
      <div className="left__chart__header">
        <span>Statistics</span>
        <FormControl>
          <Select
            className="line_chart_select"
            value={selectMonth}
            onChange={(e) => setSelectMonth(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Last 6 months</MenuItem>
            <MenuItem value={3}>Last 3 months</MenuItem>
            <MenuItem value={9}>Last 9 months</MenuItem>
            <MenuItem value={12}>Last 12 months</MenuItem>
            <MenuItem value={1}>Last month</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="left__chart__contentGraph">
        <Line options={lineOptions} data={modifiedLineData} />
      </div>
    </div>
  );
}

export default LineChart;
