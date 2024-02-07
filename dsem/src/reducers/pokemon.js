// Crear una variable que guarde el estado
// El estado va a estar dentro de una lista
const initialState = { pokemos: [] };
// Importar a React
import React from "react";
// Crear un reduce
import { SET_POKEMONS } from "../actions/types";

// Crear la función del reducer
const pokemonsReducer = (state = initialState, action) => {
    // Se crea un switch para saber que hacer según el tipo de acción
    switch (action.type) {
        // Si la acción es lo que está en SET_POKEMONS
        case SET_POKEMONS:
            // Devolver los datos filtrados acorde a lo que escribe
            return { ...state, pokemons: action.payload };
        // Si no se escribe nada muestra todos los pokemones
        default:
            // Devuelve todos los pokemones
            return state;  
        }
    };

    export default pokemonsReducer;