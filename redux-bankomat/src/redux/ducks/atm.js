//actions for deposit
export const oneHundred = () => ({
    type: "oneHundred"
  });
  
  export const twoHundred = () => ({
    type: "twoHundred"
  });
  
  export const fiveHundred = () => ({
    type: "fiveHundred"
  });
  
  export const oneThousand = () => ({
    type: "oneThousand"
  });
  
  // actions for withdraw
  export const subOneHundred = () => ({
    type: "subOneHundred"
  });
  
  export const subTwoHundred = () => ({
    type: "subTwoHundred"
  });
  
  export const subFiveHundred = () => ({
    type: "subFiveHundred"
  });
  
  export const subOneThousand = () => ({
    type: "subOneThousand"
  });

  //state
  const initialState = {
    count: 1000
  };

  //reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "oneHundred":
        return { ...state, count: state.count + 100 };
      case "twoHundred":
        return { ...state, count: state.count + 200 };
      case "fiveHundred":
        return { ...state, count: state.count + 500 };
      case "oneThousand":
        return { ...state, count: state.count + 1000 };
      case "subOneHundred":
        return { ...state, count: state.count - 100 };
      case "subTwoHundred":
        return { ...state, count: state.count - 200 };
      case "subFiveHundred":
        return { ...state, count: state.count - 500 };
      case "subOneThousand":
        return { ...state, count: state.count - 1000 };
      default:
        return state;
    }
  };
  
  export default reducer;
  