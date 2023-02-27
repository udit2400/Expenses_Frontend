import React, {useState} from 'react';
import Expense from './components/Expenses/Expense';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expense = [
  {
    id: 'el1',
    title: 'Toilet paper',
    amount: 100,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'el2',
    title: 'Bath',
    amount: 90,
    date: new Date(2022, 1, 18),
  },
];


  const App = () => {
     const [expenses, setExpense] = useState(Dummy_Expense);

     const addExpenseHandler = (expense) => {
           setExpense((prevExpenses) => {
              return [expense, ...prevExpenses];
           });
     }; 

    // return React.createElement(
    //   'div',
    //    {},
    //     React.createElement('h2', {}, 'hello'),
    //     React.createElement(Expense, {items: expense})
    // );
  return (
    <div>
       <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
       <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;

