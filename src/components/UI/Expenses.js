import React, {useState} from 'react'
import Card from './Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const changeFilterHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }


    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return(
        <Card className='expenses'>
            <ExpenseFilter onChangeFilter = {changeFilterHandler} filterYear = {filteredYear}/>
            <ExpenseChart  filterExpenses = {filteredExpenses}/>
            <ExpenseList filterExpenses = {filteredExpenses} />    
        </Card>

    );
}

export default Expenses;