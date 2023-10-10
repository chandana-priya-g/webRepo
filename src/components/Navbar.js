import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import "./Navbar.css";

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <i className='fab fa-typo3' />
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        <h2>icon</h2>
                    </div>

                    <ul className = "nav-menu">
                        <li className='nav-item'> <Link className='nav-links' to="/">Home</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/about">About</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/menu">Menu</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/new">New Arrivals</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/booking">Book Table</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/confirmation"></Link> </li>
                    </ul>

                </div>
            </nav>
        </div>
  )
}

export default Navbar