import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);


const lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const lineData = {
  labels: lineLabels,
  datasets: [
    {
      label: "Products sold",
      data: [10, 5, 20, 15, 20, 10, 9],
      fill: true,
      borderColor: "#80E2FF",
      backgroundColor: "rgba(128, 226, 255,0.1)",
      borderWidth:1.5,
      pointBackgroundColor:"rgba(128, 226, 255,0.1)",
      tension: 0.5,
    },
    {
      label: "Total views",
      data: [20, 10, 15, 20, 10, 15, 25],
      fill: true,
      borderColor: "#B5B3FB",
      backgroundColor: "rgba(181, 179,251,0.1)",
      borderWidth:1.5,
      tension: 0.5,
    },
  ],
};

export const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        boxWidth: 6,
        boxHeight: 6,
      },
    },
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        color: "#EAF0F4",
      },
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks) {
          return "$" + value + "k";
        },
      },
    },
    x: {
      grid: {
        color: "#EAF0F4",
      },
    },
  },
};

export const pieChartData = {
  labels: ["India", "Japan", "China", "France"],
  datasets: [
    {
      label: "Sales",
      data: [10000, 5000, 3000, 6000],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(160, 199, 86)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(160, 199, 86)",
      ],
      borderWidth: 1,
      text: "23%",
    },
  ],
};

export const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: "bottom",
      labels: {
        usePointStyle: true,
        boxWidth: 6,
        boxHeight: 6,
      },
    },
  },
  chart:{
    scale: {
        tick: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            console.log(value);
          },
        },
      },
  }
  
};
