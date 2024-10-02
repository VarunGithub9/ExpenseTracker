import React from 'react';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <h2>Expense Tracker</h2>
      <button onClick={() => onSelect('home')}>Home</button>
      <button onClick={() => onSelect('add-budget')}>Add Budget</button>
      <button onClick={() => onSelect('add-expense')}>Add Expense</button>
    </div>
  );
};

export default Sidebar;