
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import './Expense.css';
import ExpenseList from "./ExpenseList";
//import Chart from "../Chart/Chart";
import ExpenseChart from "./ExpenseChart";


function Expense(props) {
   const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = selectedYear => {
       setFilteredYear(selectedYear);
   };
 
    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
      <div>
      <Card className="expense">
        <ExpenseFilter selected={filteredYear}
         onChangeFilter={filterChangeHandler}
         />
         <ExpenseChart expense={filteredExpense}/>
          <ExpenseList items={filteredExpense}/>
      </Card>
      </div>
    );
};

export default Expense;


