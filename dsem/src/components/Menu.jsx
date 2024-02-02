//
import React from 'react'
import light from "../assets/icons/idea.png"
const Menu = () => {
    return (
        <div  className='Menu'>
            <ul className='menuList'>
                <li className='menulistItem'><a href="/" className='menulistitemLink'>Home</a></li>
                <li className='menulistItem'><a href="/information" className='menulistitemLink'>Information</a></li>
                <li className='menulistItem'><a href="/prueba" className='menulistitemLink'>Prueba</a></li>
                <li className='menulistItem'><img className='menulistitemIcon' src={light}></img></li>
            </ul>
        </div>
    )
}

export default Menu