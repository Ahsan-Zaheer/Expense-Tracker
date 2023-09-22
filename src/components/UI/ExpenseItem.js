import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card'


function ExpenseItems(props) {
    // const [title, setTitle] = useState(props.expenses.title);
    
    // const cLickHandler = () =>{
    //     setTitle('Updated');
    //     console.log(title);
    // };


    return(
        <Card className='expense-item'>
            <ExpenseDate date = {props.expenses.date} />
            <div className='expense-item__description'>
                <h2>{props.expenses.title}</h2>
                <div className='expense-item__price'>${props.expenses.amount}</div>
                {/* <button onClick={cLickHandler}>Click Me</button> */}
            </div>
        </Card>
    );
}

export default ExpenseItems;