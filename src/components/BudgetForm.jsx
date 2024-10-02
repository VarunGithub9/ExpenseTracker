import React, { useState } from 'react';

const BudgetForm = ({ setBudget }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      setBudget(parseFloat(amount));
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Budget</h3>
      <input
        type="number"
        placeholder="Enter budget amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;