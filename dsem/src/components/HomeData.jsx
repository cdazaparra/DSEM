import React from 'react'

// Importar una imágen
import Arbolito from "../assets/images/arbolito.png"
import Matica from "../assets/images/descarga.jpg"
const HomeData = () => {
    for(i=0;i<10;i++){
        console.log(Hola)
    }
return (
    <div className='Home'>
    <hr></hr>
    <h2  className='homeTitle'>{data.title}</h2>
    <h3 className='homeSubtitle'>{data.subtitle}</h3>
    <img className='homeImg' src={data.img} alt={data.alt}></img>
    <p className='homeText'>{data.description}</p>
    </div>
)
}

export default HomeData