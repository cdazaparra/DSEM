import React from 'react'

// Importar una imágen
import Arbolito from "../assets/images/arbolito.png"
import Matica from "../assets/images/descarga.jpg"
const HomeData = ({ data }) => {
return (
    <div className="Slider" key={data.id}>
                        <h2  className="sliderTitle">{data.title}</h2>
                    <div className="sliderContent">
                        <img className='slidercontentImg' src={data.image} alt="slidercontentImg" />
                        <p className="slidercontenttitleText">{data.description}</p>
                        <a href={data.link} target="_blank" rel="noopener noreferrer">{data.button}</a>
                    </div>
                </div>
)
}

export default HomeData