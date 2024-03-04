import { createContext, useContext, useReducer, useState } from "react";

export const Context = createContext();


const ContextProvider = ({ children }) => {

    const [showSub, setShowSub] = useState(false)


    return (
        <Context.Provider value={{ showSub,setShowSub}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider