import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => (
    <header>
        <h1>
            <Link to='/'>ZTM Challenge App</Link>
        </h1>

        <nav>
            <ul className='dummy-menu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/challenges'>Challenges</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header
