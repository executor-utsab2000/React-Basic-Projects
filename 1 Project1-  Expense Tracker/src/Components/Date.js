function Date(props) {

    
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = props.dateVariableinExpenseItem.getDate();
  const month = props.dateVariableinExpenseItem.getMonth();
  const year = props.dateVariableinExpenseItem.getFullYear();

  return (
    <span>
      {day} / {monthArray[month]} / {year}
    </span>
  );
}

export default Date;
