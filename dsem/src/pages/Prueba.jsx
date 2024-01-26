//rafce
import React from 'react'
// Importar una imágen
import Gatico from "../assets/images/gatico.jpg"
import Gatico2 from "../assets/images/gatico2.jpg"

const Prueba = () => {
  return (
    <div>
    <hr></hr>
    <h2>Prueba</h2>
    <h3>Esto es un ejemplo de un subtítulo</h3>
    <img src={Gatico} alt='Esto es un arbolito'></img>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
    <hr></hr>
    <h2>Ejemplo 2</h2>
    <h3>Esto es otro ejemplo de un subtítulo</h3>
    <img src={Gatico2} alt='Esto es un arbolito'></img>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
    <hr></hr>
  </div>
  )
}

export default Prueba