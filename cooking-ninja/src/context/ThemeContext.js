import { createContext, useReducer } from 'react'

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload }
        case "CHANGE_BACKGROUND":
            return { ...state, mode: action.payload }
        default:
            return state
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: "dark"
    });

    const changeColor = (color) => {
        dispatch({ type: "CHANGE_COLOR", payload: color })
    };

    const changeBackground = (color) => {
        dispatch({ type: "CHANGE_BACKGROUND", payload: color })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeBackground }}>
            {children}
        </ThemeContext.Provider>
    )
}