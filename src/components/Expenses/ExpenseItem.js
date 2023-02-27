import ExpenseDate  from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
import React from 'react';
function ExpenseItem(props) {

  //const clickHandler = () => {};

    return (
        <ul>
    <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
           <h2>{props.title}</h2>
           <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card>
    </ul>
    );
}

export default ExpenseItem;