import './App.css';
import { useState } from "react";
import ATM from "./components/ATM.jsx";

export default function App() {
  const [startATM, setStartATM] = useState(false);

  return (
    <div className="App">
      
      <h1>Redux - ATM Machine</h1>
      <button
        onClick={() => {
          setStartATM(!startATM);
        }}
      >
        {!startATM ? "Start ATM" : "Close ATM"}
      </button>
     

      {startATM && <ATM />}
    </div>
  );
}
