import React, { createContext, useReducer, useEffect } from "react";
import { fetchAllData } from "../api";

export const DataGuardContext = createContext();

const initialState = {
  data: null,
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

  useEffect(() => {
    fetchAllData().then((response) => {
      dispatch({ type: "GET_ALL_DATA", payload: response });
    });
  }, []);

  return (
    <DataGuardContext.Provider value={[state, dispatch]}>
      {children}
    </DataGuardContext.Provider>
  );
};
