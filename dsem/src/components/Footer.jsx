// Librerias de React
import React from 'react'
// Footer
// Firma
// Redes sociales
const Footer = () => {
  return (
    <div className='Footer'>
      <h3 className='footerFirma'>Firma</h3>
      <ul className='footerRed'>
        <li className='footerredItem'>
          <a className='footerreditemLink' href="https://www.facebook.com/" target="_blank">Facebook</a>
        </li>
        <li className='footerredItem'>
          <a  className='footerreditemLink' href="https://www.instagram.com/" target="_blank">Instagram</a>
        </li>
        <li className='footerredItem'>
          <a className='footerreditemLink' href="https://www.youtube.com/" target="_blank">Youtube</a>
        </li>
        <li><a href="https://www.flaticon.com/free-icons/light-bulb" title="light bulb icons">Light bulb icons created by Freepik - Flaticon</a></li>
      </ul>
    </div>
  )
}

export default Footer