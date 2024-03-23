import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./ExpenseItem.css";

import Date from "./Date";
import ExpenseBG from "./expensesBG";

function ExpenseItem(props) {


  return (
    <ExpenseBG>
    <div className="card" >
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><Date  dateVariableinExpenseItem={props.date}/></li> 
        <li className="list-group-item">{props.title}</li>
        <li className="list-group-item">₹ {props.price} /-</li>
      </ul>
    </div>
    </ExpenseBG>
  );
}

export default ExpenseItem;

// date data transfer????????/