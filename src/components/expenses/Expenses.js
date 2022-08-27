import { useState } from 'react';

import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2022')

  function filterChangeHandler(selectedYear) {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart 
          expenses={filteredExpenses}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;