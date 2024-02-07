// Importaciones del useEffect y useState
import React, { useState, useEffect } from "react";
// Traer archivo de la Api
import getPokemonApi from "../api/getPokemonApi";
// Traer archivo para mostrar cada pokemon (No lo hemos hecho)
import PokeCard from "./PokeCard";
// Creando la función que muestra pokemons
const PokeApiGenerator = () => {
    // Variable para manejar el estado
    const [state, setState] = useState(false);
    // Variable para guardar los pokemons
    const [pokemonsList, setPokemonsList] = useState([]);
    // Variable para guardar lo que escribe el usuario
    const [search, setSearch] = useState("");
    // URL de la Api de pokemons
    const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
    // Creamos el useEffect
    // Cargue todos los pokemons
    useEffect(() => {
        (async () => {
          await loadPokemons();
        })();
      }, []);
      // Función para cargar pokemons
      const loadPokemons = async () => {
        const response = await getPokemonApi(urlBase);
        setPokemonsList(response);
      };
      // Función para verificar lo que escribe el usuario
      const searchPokemon = (e) => {
        // Se asegura que la acción sea la de escribir en ese campo
        e.preventDefault();
        // Captura lo escrito en ese campo
        setSearch(e.target.value);
      };
      // Se crea un validador para el campo
      const validator = search === "" ? true : false;
      return (
        <div className="Poke">
    <h1
        className="pokeTitle"
        onClick={() => setState(!state)}
      >
        PokeApi
      </h1>
      
      <div className="">
      <input
        className=""
        placeholder="Buscar..."
        onChange={searchPokemon}
      ></input>
    </div>
    <div className="pokeList">
{pokemonsList.map((pokemons) => (
    <div key={pokemons.id} >
      <div>
        {validator && (
          <div >
            <PokeCard
              pokemons={pokemons}
              key={pokemons.id}
              search={search}
            ></PokeCard>
          </div>
        )}
      </div>
      <div className="pokeList">
        {!validator && (
          <div  c>
            {pokemons.name.includes(search) && (
              <div c>
                <PokeCard
                  pokemons={pokemons}
                  key={pokemons.id}
                  search={search}
                  ></PokeCard>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  ))}
</div>
</div>
)}

export default PokeApiGenerator