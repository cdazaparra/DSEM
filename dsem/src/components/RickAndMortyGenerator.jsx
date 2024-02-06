// Se usa para hacer conexión con axios
import React, {useEffect, useState} from 'react'
// Archivo de conexión
import getCharactersApi from '../api/getCharactersApi'
// Archivo que muestra personaje por personaje
import RickAndMorthyCard from './RickAndMorthyCard'

const RickAndMortyGenerator = () => {
    // Lista que se llena a medida que se devuelven los datos
    const[charactersList, setcharactersList]= useState([])
    const urlBase = "https://rickandmortyapi.com/api"
    useEffect(() => {
        (async () => {
            // Verificar si puede cargar los personajes
            await loadCharacters();
        })();
      }, []);
      const loadCharacters = async () => {
        const response = await getCharactersApi(urlBase);
        setcharactersList(response);
    };
    return (
        <div
      className='RAM'
    >
    <h1
        className='ramTitle'
        onClick={() => setState(!state)}
      >
        Rick And Morthy Api
      </h1>
      <div className='ramList'>{charactersList.map((character) => (
            <RickAndMorthyCard
              character={character}
              key={character.id}
            ></RickAndMorthyCard>
          ))}</div>
          </div>
  );
}

export default RickAndMortyGenerator