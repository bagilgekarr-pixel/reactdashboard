import React from 'react'
import './Navbar.css'
import logo from '../../assets/rohit.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">

                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="menusections">
                    <ul>
                       <li>
                        <Link to='/'>Home</Link>
                       </li>
                       <li>
                        <Link to='/'>About</Link>
                       </li>
                       <li>
                        <Link to='/'>Services</Link>
                       </li>
                       <li>
                        <Link to='/'>Contact</Link>
                       </li>
                    </ul>
                </div>

            </nav>

        </>
    )
}

export default Navbar
