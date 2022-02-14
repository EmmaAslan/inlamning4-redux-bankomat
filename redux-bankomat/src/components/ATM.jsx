import { useDispatch, useSelector } from "react-redux";
import {
  oneHundred,
  twoHundred,
  fiveHundred,
  oneThousand,
  subOneHundred,
  subTwoHundred,
  subFiveHundred,
  subOneThousand,
  withdrawValue,
  depositValue
} from "../redux/ducks/atm";

const ATM = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.atm.count);

  //OnClick-funktioner för deposit
  /* let onOneHundred = () => {
    dispatch(oneHundred());
  };

  let onTwoHundred = () => {
    dispatch(twoHundred());
  };

  let onFiveHundred = () => {
    dispatch(fiveHundred());
  };

  let onOneThousand = () => {
    dispatch(oneThousand());
  };

  let onDepositValue = () => {
    let inputDeposit = +document.querySelector("#depositInput").value;
    dispatch(depositValue(inputDeposit)); 
  } */ 

  //OnClick-funktioner för withdraw

 /* let onSubOneHundred = () => {
    if (value >= 100) {
      dispatch(subOneHundred());
    } else {
      alert("You don't got enough money!");
    }
  };

  let onSubTwoHundred = () => {
    if (value >= 200) {
      dispatch(subTwoHundred());
    } else {
      alert("You don't got enough money!");
    }
  };

  let onSubFiveHundred = () => {
    if (value >= 500) {
      dispatch(subFiveHundred());
    } else {
      alert("You don't got enough money!");
    }
  };

  let onSubOneThousand = () => {
    if (value >= 1000) {
      dispatch(subOneThousand());
    } else {
      alert("You don't got enough money!");
    }
  };

  let onWithdrawValue = () => {
      let inputWithdraw = +document.querySelector("#withdrawInput").value;

      if (value >= inputWithdraw) {
        dispatch(withdrawValue(inputWithdraw));
      } else {
        alert("You don't got enough money!");
      }
  }
    */
  //let radioDeposit = document.getElementById("deposit");
  //let radioWithdraw = document.getElementById("withdraw");

  let onOneHundred = () => {
    if (document.getElementById("deposit").checked) {
            dispatch(oneHundred());
    } else if (document.getElementById("withdraw").checked) {
            if (value >= 100) {
              dispatch(subOneHundred());
            } else {
              alert("You don't got enough money!");
            }
    } else {
        alert ("Please choose either 'Deposit' or 'Withdraw'.")
    }
  }

  let onTwoHundred = () => {
    if (document.getElementById("deposit").checked) {
            dispatch(twoHundred());
    } else if (document.getElementById("withdraw").checked) {
            if (value >= 200) {
              dispatch(subTwoHundred());
            } else {
              alert("You don't got enough money!");
            }
    } else {
      alert ("Please choose either 'Deposit' or 'Withdraw'.")
    }
  }

  let onFiveHundred = () => {
    if (document.getElementById("deposit").checked) {
            dispatch(fiveHundred());
    } else if (document.getElementById("withdraw").checked) {
            if (value >= 500) {
              dispatch(subFiveHundred());
            } else {
              alert("You don't got enough money!");
            }
    } else {
      alert ("Please choose either 'Deposit' or 'Withdraw'.")
    }
  }

  let onOneThousand = () => {
    if (document.getElementById("deposit").checked) {
            dispatch(oneThousand());
    } else if (document.getElementById("withdraw").checked) {
            if (value >= 1000) {
              dispatch(subOneThousand());
            } else {
              alert("You don't got enough money!");
            }
    } else {
      alert ("Please choose either 'Deposit' or 'Withdraw'.")
    }
  }

   let onInputValue = () => {
    if (document.getElementById("deposit").checked) {
        let inputDeposit = +document.querySelector("#valueInput").value;
        dispatch(depositValue(inputDeposit)); 
       
    } else if (document.getElementById("withdraw").checked) {
        let inputWithdraw = +document.querySelector("#valueInput").value;

        if (value >= inputWithdraw) {
          dispatch(withdrawValue(inputWithdraw));
        } else {
          alert("You don't got enough money!");
        }
    } else {
      alert ("Please choose either 'Deposit' or 'Withdraw'.")
    }
  }

  return (
    <div>
      <h1>Current balance : {value}kr</h1>
        <div className="depositWithdraw">
          
          <input type="radio" name="atm" id="deposit" value="deposit"/>
          <label htmlFor="deposit">Deposit</label>
          
          <input type="radio" name="atm" id="withdraw" value="withdraw" />
          <label htmlFor="withdraw">Withdraw</label>
        </div>
        <br /><br />
        <div className="valueButtons">
        <button onClick={onOneHundred}>100kr</button>
        <button onClick={onTwoHundred}>200kr</button>
        <button onClick={onFiveHundred}>500kr</button>
        <button onClick={onOneThousand}>1000kr</button>
        </div>

        <br /><br />
        <div className="inputValue">
          <input type="number" id="valueInput" placeholder="Enter amount:"/>
          <button className="inputButton" onClick={onInputValue}>Add value</button>
        </div>
{
/*
      <div className="depositWithdraw">
        <div className="deposit">
            <h2>Deposit</h2>
            <h3>Choose the amount of money you wish to deposit: </h3>
            <button onClick={onOneHundred}>+100</button>
            <button onClick={onTwoHundred}>+200</button>
            <button onClick={onFiveHundred}>+500</button>
            <button onClick={onOneThousand}>+1000</button>
            <br /> <br />
            <input type="number" id="depositInput" placeholder="Enter amount to deposit:"/>
            <button className="inputButton" onClick={onDepositValue}>Deposit</button>
        </div>
       
        <div className="withdraw">
            <h2>Withdraw</h2>
            <h3>Choose the amount of money you wish to withdraw: </h3>
            <button onClick={onSubOneHundred}>-100</button>
            <button onClick={onSubTwoHundred}>-200</button>
            <button onClick={onSubFiveHundred}>-500</button>
            <button onClick={onSubOneThousand}>-1000</button>
                <br /> <br />
            <input type="number" id="withdrawInput" placeholder="Enter amount to withdraw:"/>
            <button className="inputButton" onClick={onWithdrawValue}>Withdraw</button>
        </div>
</div> */}
    </div>
  );
};

export default ATM;
