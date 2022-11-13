import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./PieChartComponent.css";
import { pieChartData, pieChartOptions } from "./Charts";
import { Divider } from "@mui/material";

function PieChartComponent() {
  return (
    <div className="pie__chart__body">
      <div>
        <span>Sales Distribution</span>
      </div>
      <div className="doughnut__wrapper">
        <div className="piechart__doughnut">
          <Doughnut data={pieChartData} options={pieChartOptions} />
          <div className="piechart__insideData">
          <div className="data">24,000</div ><div className="sales"> Sales</div>
          </div>
         
        </div>
      
      </div>
      <Divider className="pie_divider" />
      <div className="piechart__details">
        {pieChartData.labels.map((item, index) => {
          return (
            <div key={index} >
             <span className={`dot dot${index}`}></span> <span className="pie_chart_li_item">{item}</span> <span className="pie_chart_li">{pieChartData.datasets[0].data[index] + "  " + "Sales"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PieChartComponent;
