import React, { createContext, useReducer } from "react";

export const DataGuardContext = createContext();

const initialState = {
  data: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export const DataGuardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataGuardContext.Provider value={[state, dispatch]}>
      {children}
    </DataGuardContext.Provider>
  );
};
