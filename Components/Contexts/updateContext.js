import { createContext, useReducer } from "react";
import { reducer as updateReducer } from "../reducers/updateReducer";
import { reducer as updateNameReducer } from "../reducers/updateNameReducer";
import { increment, decrement, changeName } from "../reducers/actionTypes";
const Context = createContext();
const initialState = {
  value: 0,
  name: "Ashutosh Singh",
};

const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(updateReducer, updateNameReducer),
    initialState
  );
  const handleInc = () => {
    dispatch({
      type: increment,
    });
  };
  const handleDec = () => {
    dispatch({
      type: decrement,
    });
  };
  const updateName = (name) => {
    dispatch({
      type: changeName,
      payload: {
        name,
      },
    });
  };
  const value = { ...state, handleInc, handleDec, updateName };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
