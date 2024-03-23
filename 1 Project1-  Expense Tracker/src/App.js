import Expenses from "./Components/Expenses";

function App() {
  let expenses = [
    { title: "Tution Fees", date: new Date(), price: 1200 },
    { title: "Battlegrounds Mobile India -> UC", date: new Date(), price: 6800 },
    { title: "Pro Evolution Soccer -> Coins", date: new Date(), price: 500 },
    { title: "Cycle Repair", date: new Date(), price: 200 },
    { title: "Sports Shoes -> Spikes", date: new Date(), price: 1500 },
    { title: "GoalKeeping Gloves", date: new Date(), price: 2000 },
    { title: "Graphics Card", date: new Date(), price: 6000 },
    { title: "Laptop", date: new Date(), price: 56000 },
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

/*<Expenses variable = { array name } /> */
