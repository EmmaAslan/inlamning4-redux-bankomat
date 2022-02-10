import { useDispatch, useSelector } from "react-redux";
import {
  oneHundred,
  twoHundred,
  fiveHundred,
  oneThousand,
  subOneHundred,
  subTwoHundred,
  subFiveHundred,
  subOneThousand
} from "../redux/ducks/atm";

const ATM = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.atm.count);

  //OnClick-funktioner för deposit
  let onOneHundred = () => {
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

  //OnClick-funktioner för withdraw

  let onSubOneHundred = () => {
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

  return (
    <div>
      <h1>Current balance : {value}</h1>

      <h2>Deposit</h2>
      <h3>Choose the amount of money you wish to deposit: </h3>
      <button onClick={onOneHundred}>+100</button>
      <button onClick={onTwoHundred}>+200</button>
      <button onClick={onFiveHundred}>+500</button>
      <button onClick={onOneThousand}>+1000</button>
      <br />
      <br />

      <h2>Withdraw</h2>
      <h3>Choose the amount of money you wish to withdraw: </h3>
      <button onClick={onSubOneHundred}>-100</button>
      <button onClick={onSubTwoHundred}>-200</button>
      <button onClick={onSubFiveHundred}>-500</button>
      <button onClick={onSubOneThousand}>-1000</button>
    </div>
  );
};

export default ATM;
