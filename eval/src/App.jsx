import React from "react";
import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {

  const[toogle,settoogle]=React.useState(false)
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>settoogle(!toogle)}>
        {/* Show text Add House or Show Rentals based on state */
        (toogle)?"ShowRentals":"ShowAddHouse"}
      </button>
      {/* Show component based on state */
      (toogle)?<AddHouse/>:<Rentals/>}
      <br />

    </div>
  );
}

export default App;
