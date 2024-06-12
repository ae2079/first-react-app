import React, { createContext, useReducer } from "react";

// Create a Context for the count state
const CountContext = createContext();

// Define the initial state
const initialState = {
    items: {}, // This will hold the count for each item by its name or id
};

// Define the reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'charge': {
            const newItemCount = (state.items[action.name] || 0) + action.count;
            const newItems = { ...state.items, [action.name]: newItemCount };
            return { items: newItems };
        }
        case 'decrement': {
            const newItemCount = Math.max((state.items[action.name] || 0) - 1, 0);
            const newItems = { ...state.items, [action.name]: newItemCount };
            return { items: newItems };
        }
        default:
            throw new Error();
    }
}

// Create a provider component
function CountProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{ state, dispatch }}>
            {children}
        </CountContext.Provider>
    );
}

export { CountContext, CountProvider };
