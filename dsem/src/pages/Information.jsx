//rafce
import React from 'react'
// Importar una imágen
import Burrito from "../assets/images/burrito.jpg"
import Burrito2 from "../assets/images/burrito2.jpg"
const Information = () => {
  return (
    <div>
    <hr></hr>
    <h2>Information</h2>
    <h3>Esto es un ejemplo de un subtítulo</h3>
    <img src={Burrito} alt='Esto es un arbolito'></img>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
    <hr></hr>
    <h2>Ejemplo 2</h2>
    <h3>Esto es otro ejemplo de un subtítulo</h3>
    <img src={Burrito2} alt='Esto es un arbolito'></img>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
    <hr></hr>
  </div>
  )
}

export default Information