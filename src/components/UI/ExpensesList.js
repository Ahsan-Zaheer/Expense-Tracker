import './ExpensesList.css' ;
import ExpenseItem from './ExpenseItem';

const ExpenseList = props =>{

    if (props.filterExpenses.length === 0) {
        return <h2 className='NaN'>No Expenses Found</h2>
    }


    return (
       props.filterExpenses.map(
            (expense) => 
                (<ExpenseItem
                    key = {expense.id}
                    expenses = {expense}
                 />))
    );
}

export default ExpenseList;