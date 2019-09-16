import React from 'react';

const Header = () => {
    return(
    <header>
        <ul className="menu-header">
            <li><h1 id="title">L'Escabox</h1></li>
            <li><button id="login">Déconnexion</button></li>
        </ul>
    </header>
    )
}

export default Header;