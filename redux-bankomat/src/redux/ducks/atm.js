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

  export const depositValue = (value) => ({
      type: "depositValue",
      payload: {
          value: value
      }
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

  export const withdrawValue = (value) => ({
    type: "withdrawValue",
    payload: {
      value: value
    }
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
      case "depositValue":
          return {...state, count: state.count + action.payload.value}
      case "subOneHundred":
        return { ...state, count: state.count - 100 };
      case "subTwoHundred":
        return { ...state, count: state.count - 200 };
      case "subFiveHundred":
        return { ...state, count: state.count - 500 };
      case "subOneThousand":
        return { ...state, count: state.count - 1000 };
      case "withdrawValue":
        return {...state, count: state.count - action.payload.value};
      default:
        return state;
    }
  };
  
  export default reducer;
  