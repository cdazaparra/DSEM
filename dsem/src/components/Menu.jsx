import React from 'react'

const Menu = () => {
    return (
        <div  className='Menu'>
            <ul className='menuList'>
                <li className='menulistItem'><a href="/" className='menulistitemLink'>Home</a></li>
                <li className='menulistItem'><a href="/information" className='menulistitemLink'>Information</a></li>
                <li className='menulistItem'><a href="/prueba" className='menulistitemLink'>Prueba</a></li>
            </ul>
        </div>
    )
}

export default Menu