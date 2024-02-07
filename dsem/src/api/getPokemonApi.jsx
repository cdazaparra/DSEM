// Importandom Axios
import axios from "axios"
// Función para listar todos los pokemones
const getPokemonApi = (url) => {
    // Verificara si hay datos en el servidor
    return axios.get(url).then(async (res) => {
        // Guardar los pokemons en un arreglo
        let pokemons = [];
        // Esperando respuesta del servidor
        await axios.all(
            // Poniendo todos los pokemones
            res.data.results.map((pokemon) => {
                // Devolviendo los pokemones
                return axios.get(pokemon.url).then((res) => {
                    // Guardando los pokemones en un arreglo
                    pokemons.push(res.data);
                });
            })
          );
          // Devolvemos el arreglo guardado
          return pokemons;
        });
    };
    
    export default getPokemonApi;