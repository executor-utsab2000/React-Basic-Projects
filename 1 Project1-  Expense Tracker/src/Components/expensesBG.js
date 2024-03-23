import "./expensesBG.css";

function ExpenseBG(props){
return(
    <div className="ExpenseBG">{props.children}</div>

)

}
// in props.children we store the children of the compnent created 
export default ExpenseBG;