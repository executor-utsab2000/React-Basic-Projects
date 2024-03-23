// part of App.js

// this whole of app js was replaced by expenses .. where data is passed by expenses variable and receives here ......
//                <Expenses expenses={expenses}/>
     

import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <>
      <ExpenseItem
        title={props.expenses[0].title} //props.variable in app.js name
        date={props.expenses[0].date}
        price={props.expenses[0].price}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        price={props.expenses[1].price}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        price={props.expenses[2].price}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        price={props.expenses[3].price}
      />
      <ExpenseItem
        title={props.expenses[4].title}
        date={props.expenses[4].date}
        price={props.expenses[4].price}
      />
      <ExpenseItem
        title={props.expenses[5].title}
        date={props.expenses[5].date}
        price={props.expenses[5].price}
      />
      <ExpenseItem
        title={props.expenses[6].title}
        date={props.expenses[6].date}
        price={props.expenses[6].price}
      />
      <ExpenseItem
        title={props.expenses[7].title}
        date={props.expenses[7].date}
        price={props.expenses[7].price}
      />
    </>
  );
}

export default Expenses;