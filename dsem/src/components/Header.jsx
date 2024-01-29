// Librerias de React
import React from 'react'
// Header
  // Logo
  import Logo from "../assets/images/logo.png"
  // Nombre del proyecto
  // Menú
// Estilos
import '../styles/Base.sass'
import Menu from './Menu'
const Header = () => {
  return (
    <div  className='Header'>
      <div  className='headerContainer'>
        <img src={Logo} alt="Logo"  className='headercontainerLogo'/>
        <h1 className='headercontainerName'>Proyecto para aprender React</h1>
      </div>
      <div  className='headerMenu'>
        <Menu />
      </div>
    </div>
  )
}

export default Header