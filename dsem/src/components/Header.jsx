// Librerias de React
import React from 'react'
// Header
  // Logo
  import Logo from "../assets/images/logo.png"
  // Nombre del proyecto
  // Menú
import Menu from './Menu'
const Header = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <h1>Proyecto para aprender React</h1>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default Header