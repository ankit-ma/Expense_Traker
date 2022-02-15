import "./Chart.css";
import ChartBar from "./ChartBar";
function chart(props) {
  const dataPointvalues = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaxValue = Math.max(...dataPointvalues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default chart;
