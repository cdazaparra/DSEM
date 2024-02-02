// Importamos React
// Importamos useState para saber que estado tiene la variable global del contexto
import React, {useState} from "react"
// Importamos el contexto para llenarlo con lo que se quiere
import { InterationContext } from "../context/InterationContext"
// Se crear el proveedor de colores
const InterationProvider=({children})=>{
    const [color, setColor]= useState(false)
    const handleColor=()=>{
        setColor(!color)
    }
    const colorSelected = color ? 'Dark' : 'Light'
    // if color
    //     Dark
    // else
    //     Light
    return(
        <InterationContext.Provider value={{color, handleColor, colorSelected}}>
            {children}
        </InterationContext.Provider>
    )
}

export default InterationProvider