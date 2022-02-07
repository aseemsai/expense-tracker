import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let maxExpenseValue = Math.max(...dataPointValues);
  const chartRenderArray = props.dataPoints.map((dataPoint) => (
    <ChartBar
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={maxExpenseValue}
      label={dataPoint.label}
    />
  ));
  return <div className="chart">{chartRenderArray}</div>;
};

export default Chart;
