import "./MyPage.scss";
import React from "react";
import {
  VictoryGroup,
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryStack,
} from "victory";

const mockExpensesData = {
  expenses: {
    grocery: 600,
    education: 560,
    gas: 120,
    shopping: 100,
    rent: 1200,
  },

  income: {
    salary: 2800,
    investment: 150,
  },
};

function SampleLineChart() {
  return (
    <VictoryChart width={400} height={400}>
      <VictoryGroup
        style={{
          data: { strokeWidth: 2, fillOpacity: 0.2 },
        }}
      >
        <VictoryArea
          style={{
            data: { fill: "cyan", stroke: "cyan" },
          }}
          data={[
            { x: "SUN", y: `$${1000}` },
            { x: "MON", y: `$${2000}` },
            { x: "TUE", y: `$${3000}` },
            { x: "WED", y: `$${4000}` },
            { x: "THU", y: `$${5000}` },
            { x: "FRI", y: `$${6000}` },
            { x: "SAT", y: `$${7000}` },
          ]}
        />
        <VictoryArea
          style={{
            data: { fill: "magenta", stroke: "magenta" },
          }}
          data={[
            { x: "SUN", y: `$${1000}` },
            { x: "MON", y: `$${2000}` },
            { x: "TUE", y: `$${3000}` },
            { x: "WED", y: `$${4000}` },
            { x: "THU", y: `$${5000}` },
            { x: "FRI", y: `$${6000}` },
            { x: "SAT", y: `$${7000}` },
          ]}
        />
      </VictoryGroup>
    </VictoryChart>
  );
}

function MyPage() {
  const barStyles = {
    data: {
      fill: ({ datum }) => (datum.x === "income" ? "green" : "red"),
    },
  };
  return (
    <main>
      <div>Hello, Yoonwon</div>
      <div>ACCOUNTS OVERVIEW</div>
      <VictoryChart height={400} width={400} domainPadding={{ x: 100, y: 20 }}>
        <VictoryBar
          style={barStyles}
          categories={{
            x: ["income", "expenses"],
          }}
          data={[{ x: "income", y: 2950 }]}
          barRatio={4}
        />
        <VictoryBar
          style={barStyles}
          categories={{
            x: ["income", "expenses"],
          }}
          data={[{ x: "expenses", y: 2580 }]}
          barRatio={4}
        />
        <VictoryAxis dependentAxis />
        <VictoryAxis tickFormat={["income", "expenses"]} />
      </VictoryChart>

      <div>Total Income</div>
      <div>Total Expenses</div>
      <div>Total Balance</div>
    </main>
  );
}

export default MyPage;
