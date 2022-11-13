import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { lineData, lineOptions } from "./Charts";
import "./LineChart.css";
import { Line } from "react-chartjs-2";

function LineChart() {
  const [selectMonth, setSelectMonth] = useState("");
  return (
    <div>
      <div className="left__chart__header">
        <span>Statistics</span>
        <FormControl>
          <Select className="line_chart_select"
           
            value={selectMonth}
            onChange={(e) => setSelectMonth(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">
              Last 6 months
            </MenuItem>
            <MenuItem value={3}>Last 3 months</MenuItem>
            <MenuItem value={9}>Last 9 months</MenuItem>
            <MenuItem value={12}>Last 12 months</MenuItem>
            <MenuItem value={1}>Last month</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="left__chart__contentGraph">
        <Line options={lineOptions} data={lineData} />
      </div>
    </div>
  );
}

export default LineChart;
