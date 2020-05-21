import React, {createContext, useReducer } from "react";

import Reducer from "./reducer";

const initialState = {
    darkMode: false
}

export const Context = createContext(initialState);
export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    const toggleDarkMode = () => {
        dispatch({ type: "SET_DARK_MODE", payload: !state.darkMode });
    };

    return <Context.Provider value={{darkMode: state.darkMode, toggleDarkMode }}>{children}</Context.Provider>;
    
};

