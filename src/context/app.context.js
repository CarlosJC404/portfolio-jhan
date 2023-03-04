import { createContext, useState } from 'react';

export const Context = createContext()

export const ContextProvider = ({ children }) => {

    const [canvasState, setCanvasState] = useState({"width": 0, "height": 0})

    const Contexts = {
        //Estado del canvas
        canvasState,
        setCanvasState
    }
    return (
        <Context.Provider value={Contexts}>
            {children}
        </Context.Provider>
    )
}