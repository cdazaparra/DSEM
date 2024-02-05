//rafce
// Librerias de React
import React from 'react'
// Importar estilos
import "../styles/Home.sass"
// Se importa la variable global par administrar el color
import { useInteractionContex } from "../context/InteractionContex";
// Importar componentes
import HomeData from '../components/HomeData';
// Archivo que trae los datos
import {dataHome} from '../helpers/data'
const Home = () => {
  // Se trae la variable que contiene el nombre del tema del contexto
  const { pageColorSelected}= useInteractionContex()
  return(
    <div className="Container">
        {dataHome.map((data=>{
            return(
                <HomeData data={data}></HomeData>
            )
        }))}
    </div>
  )
}

export default Home