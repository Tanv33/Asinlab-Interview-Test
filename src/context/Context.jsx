import React, { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const GlobalContext = createContext("Initial Value");
let data = {
  user: false,
};

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
