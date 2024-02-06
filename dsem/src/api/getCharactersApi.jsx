// Libreríapara conectar Apis
import axios from "axios";

const getCharactersApi = (url) => {
    return axios.get(url).then(async (res) => {
        // guardar todos los personajes
        let characterArray = [];
        // Variable que guarda los datos del servidor
        const characters = res.data.characters;
        // Esperando respuesta del servidor
        await axios.get(characters).then(async (res) => {
            // Axios para captura los datos
            await axios.all(
                // Mostrar personaje por personaje
                res.data.results.map((character) => {
                    // Guardar en el array que habiamos creado
                    characterArray.push(character);
                })
                );
                console.log("res.data.results______", res.data.results);});
                // Devolviendo array con los personajes
                return characterArray;
              });}
              export default getCharactersApi