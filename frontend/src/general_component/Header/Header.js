import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import panier from '../../assets/panier.svg'

const Header = () => {
  return (
<div className='navbar'>  
<div className='pages'>
        <Link to='/'>Home</Link>
        <Link to='About'>About</Link>
        <Link to='Shop'>Shop</Link>
        <img id='logo' src={logo} alt="logo" />
        <Link to='Blog'>Blog</Link>
        <Link to='Contact'>Contact</Link>
        <img id='panier' src={panier} alt="panier" />
</div>    
        
        </div>  



  )
}

export default Header