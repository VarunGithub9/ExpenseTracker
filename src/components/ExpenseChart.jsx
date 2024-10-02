// src/components/ExpenseChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses, budget, budgetDescription }) => {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = budget - totalExpenses;

  // Prepare data for the chart
  const data = {
    labels: ['Expenses', 'Remaining Budget'],
    datasets: [
      {
        data: [totalExpenses, remainingBudget],
        backgroundColor: ['red', 'green'],
      },
    ],
  };

  // Create an array for tooltip labels
  const tooltipLabels = expenses.map((expense) => expense.description);

  // Configure tooltip options
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            // Return the description for expenses
            if (context.label === 'Expenses') {
              return `Total Expenses: ${totalExpenses}`;
            } else if (context.label === 'Remaining Budget') {
              return `Budget: ${budget} (${budgetDescription})`;
            }
            return context.label; // Remaining Budget
          },
          afterLabel: (context) => {
            // Show descriptions of expenses in the tooltip
            if (context.label === 'Expenses') {
              return tooltipLabels.join(', ');
            }
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <h3>Expense Chart</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
