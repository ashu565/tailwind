import { changeName } from "./actionTypes";
const reducer = (state, action) => {
  switch (action.type) {
    case changeName: {
      const newState = { ...state };
      newState.name = action.payload.name;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export { reducer };
