import React from 'react';

const TransactionHistory = ({ expenses }) => {
  return (
    <div className="transaction-history" style={{ marginTop: '20px' }}>
      <h3>Transaction History</h3>
      <ul>
        {expenses.length === 0 ? (
          <li>No transactions added yet.</li>
        ) : (
          expenses.map((expense, index) => (
            <li key={index}>
              {expense.description}: ${expense.amount.toFixed(2)}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionHistory;
