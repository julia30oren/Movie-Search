import React from 'react';

const Nav = (props) => {
    return (
            <header className="header container">
                <i className="fas fa-video fa-4x"></i>
                <h1 className="brand-logo">Muvie App</h1> 
                <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Search Movies</a>
                    </li>
                </ul>
            </header>
    )
}

export default Nav;