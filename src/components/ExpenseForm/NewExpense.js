import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props)=>{

    const saveExpenseHandler = (enteredExpense) =>{
        const expense = {
            ...enteredExpense,
            id: Math.random().toString()
        }

        props.onAddExpense(expense);
    }


    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpense = {saveExpenseHandler}/>
        </div>

    );
}

export default NewExpense;