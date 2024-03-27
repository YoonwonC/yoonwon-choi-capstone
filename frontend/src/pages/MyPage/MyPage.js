import "./MyPage.scss";
import React from "react";
import {
  VictoryGroup,
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryBar,
  VictoryStack,
  VictoryLabel,
  VictoryTheme,
} from "victory";

const mockExpensesDataForCurrentMonth = {
  expenses: {
    rent: 1200,
    grocery: 600,
    education: 560,
    gas: 120,
    shopping: 100,
  },

  income: {
    salary: 2800,
    investment: 150,
  },
};

const mockExpensesDataOverTime = [
  {
    month: "JAN",
    expenses: {
      rent: 1200,
      grocery: 450,
      education: 560,
      gas: 170,
      shopping: 200,
    },

    income: {
      salary: 2800,
      investment: 250,
    },
  },
  {
    month: "FEB",
    expenses: {
      rent: 1200,
      grocery: 700,
      education: 560,
      gas: 220,
      shopping: 60,
    },

    income: {
      salary: 2800,
      investment: 50,
    },
  },
  {
    month: "MAR",
    expenses: {
      rent: 1280,
      grocery: 300,
      education: 660,
      gas: 120,
      shopping: 100,
    },

    income: {
      salary: 2800,
      investment: 150,
    },
  },
  {
    month: "APR",
    expenses: {
      rent: 1280,
      grocery: 500,
      education: 560,
      gas: 80,
      shopping: 700,
    },

    income: {
      salary: 2800,
      investment: 150,
    },
  },
  {
    month: "MAY",
    expenses: {
      rent: 1200,
      grocery: 600,
      education: 560,
      gas: 120,
      shopping: 100,
    },

    income: {
      salary: 2800,
      investment: 150,
    },
  },
  {
    month: "JUN",
    expenses: {
      rent: 1200,
      grocery: 600,
      education: 560,
      gas: 120,
      shopping: 100,
    },

    income: {
      salary: 3000,
      investment: 150,
    },
  },
];

function IncomeExpensesCurrentMonthBarChart({ income, expenses }) {
  const barStyles = {
    income: {
      salary: {
        data: {
          fill: ({ datum }) => "green",
        },
      },
      investment: {
        data: {
          fill: ({ datum }) => "lightgreen",
        },
      },
    },
    expenses: {
      rent: {
        data: {
          fill: ({ datum }) => "red",
        },
      },
      grocery: {
        data: {
          fill: ({ datum }) => "magenta",
        },
      },
      education: {
        data: {
          fill: ({ datum }) => "pink",
        },
      },
      shopping: {
        data: {
          fill: ({ datum }) => "orange",
        },
      },
      gas: {
        data: {
          fill: ({ datum }) => "purple",
        },
      },
    },
  };

  const incomeTypes = Object.keys(mockExpensesDataForCurrentMonth.income);
  const expenseTypes = Object.keys(mockExpensesDataForCurrentMonth.expenses);
  return (
    <VictoryChart height={400} width={400} domainPadding={{ x: 100, y: 10 }}>
      <VictoryStack>
        {incomeTypes.map((incomeType) => (
          <VictoryBar
            style={barStyles.income[incomeType]}
            categories={{
              x: ["Income", "Expenses"],
            }}
            data={[
              {
                x: "Income",
                y: mockExpensesDataForCurrentMonth.income[incomeType],
              },
            ]}
            barRatio={4}
            labels={incomeType}
            labelComponent={
              <VictoryLabel
                dx={20}
                dy={10}
                // TODO: fix label positioning on y axis
                textAnchor="start"
                verticalAnchor="middle"
              />
            }
          />
        ))}
      </VictoryStack>
      <VictoryStack>
        {expenseTypes.map((expenseType) => (
          <VictoryBar
            style={barStyles.expenses[expenseType]}
            categories={{
              x: ["Income", "Expenses"],
            }}
            data={[
              {
                x: "Expenses",
                y: mockExpensesDataForCurrentMonth.expenses[expenseType],
              },
            ]}
            barRatio={4}
            labels={expenseType}
            labelComponent={
              <VictoryLabel
                dx={20}
                dy={10}
                // TODO: fix label positioning on y axis
                textAnchor="start"
                verticalAnchor="middle"
              />
            }
          />
        ))}
      </VictoryStack>

      <VictoryAxis dependentAxis tickFormat={(y) => `$${y}`} />
      <VictoryAxis tickValues={["Income", "Expenses"]} />
    </VictoryChart>
  );
}

function IncomeExpensesOverTimeLineChart({ incomeExpensesHistoryData }) {
  return (
    <VictoryChart
      width={400}
      height={400}
      theme={VictoryTheme.material}
      domainPadding={{ x: 0 }}
    >
      <VictoryGroup
        style={{
          data: { strokeWidth: 2, fillOpacity: 0.2 },
        }}
      >
        <VictoryLine
          style={{
            data: { stroke: "green" },
          }}
          categories={{ x: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"] }}
          data={incomeExpensesHistoryData.map((monthData) => {
            const incomeValues = Object.values(monthData.income);
            let totalIncomeForMonth = 0;
            for (const income of incomeValues) {
              totalIncomeForMonth += income;
            }
            return {
              x: monthData.month,
              y: totalIncomeForMonth,
            };
          })}
        />
        <VictoryLine
          style={{
            data: { stroke: "red" },
          }}
          categories={{ x: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"] }}
          data={incomeExpensesHistoryData.map((monthData) => {
            const expenseValues = Object.values(monthData.expenses);
            let totalExpensesForMonth = 0;
            for (const expense of expenseValues) {
              totalExpensesForMonth += expense;
            }
            return {
              x: monthData.month,
              y: totalExpensesForMonth,
            };
          })}
        />
        <VictoryAxis
          dependentAxis
          domain={{ y: [0, 4000] }}
          tickFormat={(y) => `$${y}`}
        />
        <VictoryAxis
          tickCount={incomeExpensesHistoryData.length}
          tickValues={["JAN", "FEB", "MAR", "APR", "MAY", "JUN"]}
        />
      </VictoryGroup>
    </VictoryChart>
  );
}

function MyPage() {
  return (
    <main>
      <h1>Hello, Yoonwon</h1>

      <section>
        <h2>BUDGET OVERVIEW</h2>
        <h3>Current Month: Income vs Expenses</h3>

        <IncomeExpensesCurrentMonthBarChart
          {...mockExpensesDataForCurrentMonth}
        />
      </section>

      <section>
        <h3>Income vs Expenses over time</h3>
        <IncomeExpensesOverTimeLineChart
          incomeExpensesHistoryData={mockExpensesDataOverTime}
        />
      </section>
    </main>
  );
}

export default MyPage;
