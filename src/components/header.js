import React from 'react';
import './css/header.css'
import NavigationDesktop from './NavigationDesktop';
import navLinksData from './data.json';

export default function Header() {
      
  return (
    <nav className="navbar">
        <div className='logo'>
            <h3 className="logo-h">Shree Krishnam Sales</h3>
        </div>
        <ul className="classlists">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <NavigationDesktop navLinksData={navLinksData} />
        <div className="search">
            <input type="text" placeholder="search your item here" className="in" />
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>  
        </div>
        <div className="cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg>
        </div>

        <div className="buttons">
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
        </div>
    </nav>
  );
}
