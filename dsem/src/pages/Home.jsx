//rafce
// Librerias de React
import React from 'react'
// Importar una imágen
import Arbolito from "../assets/images/Arbolito.webp"
import Matica from "../assets/images/descarga.jpg"
const Home = () => {
  return (
    <div className='Home'>
      <hr></hr>
      <h2  className='homeTitle'>Home</h2>
      <h3 className='homeSubtitle'>Esto es un ejemplo de un subtítulo</h3>
      <img className='homeImg' src={Arbolito} alt='Esto es un arbolito'></img>
      <p className='homeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
      <hr></hr>
      <h2 className='homeTitle'>Ejemplo 2</h2>
      <h3 className='homeSubtitle'>Esto es otro ejemplo de un subtítulo</h3>
      <img  className='homeImg' src={Matica} alt='Esto es un arbolito'></img>
      <p className='homeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
      <hr></hr>
    </div>
  )
}

export default Home