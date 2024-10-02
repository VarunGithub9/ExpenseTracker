// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseChart from './components/ExpenseChart';
import TransactionHistory from './components/TransactionHistory'; // Import the TransactionHistory component

const App = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [view, setView] = useState('home');

  return (
    <div className="app" style={{ display: 'flex' }}>
      <Sidebar onSelect={setView} />
      <div className="main-content" style={{ flex: 1, padding: '20px' }}>
        {view === 'home' && <h2>Welcome to Expense Tracker</h2>}
        {view === 'add-budget' && <BudgetForm setBudget={setBudget} />}
        {view === 'add-expense' && <ExpenseForm setExpenses={setExpenses} />}
        <ExpenseChart expenses={expenses} budget={budget} />
      </div>
      <div className="right-sidebar" style={{ width: '300px', padding: '20px', borderLeft: '1px solid #ccc' }}>
        <TransactionHistory expenses={expenses} /> {/* Add the TransactionHistory component */}
      </div>
    </div>
  );
};

export default App;
