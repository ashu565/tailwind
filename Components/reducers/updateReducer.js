import { increment, decrement } from "./actionTypes";
const reducer = (state, action) => {
  switch (action.type) {
    case increment: {
      const newState = { ...state };
      newState.value++;
      return newState;
    }
    case decrement: {
      const newState = { ...state };
      newState.value--;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export { reducer };
