// Se necesita un contexto para que el color de fondo aplique en todas las páginas
// Para esto se debe crear el contexto y usarlo
import { createContext, useContext } from "react"

// Se crea el contexto
export const InterationContext = createContext()
// Usar el contexto
export const useInterationContext = ()=>{
    // Devolvemos el contexto
    return useContext(InterationContext)
}