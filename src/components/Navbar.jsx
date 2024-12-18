import React from 'react';
import { Link } from 'react-router';
import './Navbar.css'

function Navbar({ cartCount }) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">
                        Karzinka ({cartCount})
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
