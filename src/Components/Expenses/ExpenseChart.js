import Chart from "../UI/Chart";

function ExpenseChart(props) {
  const cahrtdatapoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expens of props.expenses) {
    const expenseMonth = expens.date.getMonth();
    cahrtdatapoints[expenseMonth].value += expens.amount;
  }

  return (
    <div>
      <Chart datapoints={cahrtdatapoints} />
    </div>
  );
}

export default ExpenseChart;
